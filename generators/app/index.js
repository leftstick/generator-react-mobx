const Generator = require('yeoman-generator');

class gen extends Generator {
    
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

        try {
            this.username = process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2];
        } catch (e) {
            this.username = '';
        }
    }

    prompting() {

        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: name => {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }

                    const fs = require('fs');
                    if (!fs.existsSync(this.destinationPath(name))) {
                        return true;
                    }
                    if (fs.statSync(this.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Your project description',
                default: ''
            },
            {
                type: 'input',
                name: 'username',
                message: 'Your name',
                default: this.username
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: ''
            },
            {
                type: 'list',
                name: 'registry',
                message: 'Which registry would you use?',
                choices: [
                    'https://registry.npm.taobao.org',
                    'https://registry.npmjs.org'
                ]
            }
        ])
            .then(answers => {
                require('date-util');
                this.answers = answers;
                this.answers.date = new Date().format('mmm d, yyyy');
                this.obj = {answers: this.answers};
            });
    }

    configuring(answers) {
        const path = require('path');
        const fs = require('fs');
        const done = this.async();
        fs.exists(this.destinationPath(this.answers.name), exists => {
            if (exists && fs.statSync(this.destinationPath(this.answers.name)).isDirectory()) {
                this.log.error('Directory [' + this.answers.name + '] exists');
                process.exit(1);
            }
            this.destinationRoot(path.join(this.destinationRoot(), this.answers.name));
            done();
        });
    }

    writing() {
        const _ = require('lodash');

        this.fs.copyTpl(this.templatePath('js'), this.destinationPath('js'), this.obj, {
            interpolate: /<%=([\s\S]+?)%>/g
        });
        this.fs.copy(this.templatePath('less', '*'), this.destinationPath('less'));
        this.fs.copy(this.templatePath('img', '*'), this.destinationPath('img'));
        this.fs.copy(this.templatePath('font', '*'), this.destinationPath('font'));
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('index.html_vm'), this.destinationPath('index.html_vm'));
        this.fs.copyTpl(this.templatePath('package.json_vm'), this.destinationPath('package.json'), this.obj);
        this.fs.copyTpl(this.templatePath('postcss.config.js'), this.destinationPath('postcss.config.js'));
        this.fs.copyTpl(this.templatePath('webpack.dev.config.js'), this.destinationPath('webpack.dev.config.js'), this.obj);
        this.fs.copyTpl(this.templatePath('webpack.prod.config.js'), this.destinationPath('webpack.prod.config.js'), this.obj);
    }

    install() {
        this.npmInstall(undefined, {
            registry: this.answers.registry
        });
    }

    end() {
        this.log.ok('Project ' + this.answers.name + ' generated!!!');
    }
}

module.exports = gen;
