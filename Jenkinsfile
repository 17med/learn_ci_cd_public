pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    npm i
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Testing..'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    node index.js
                }
            }
        }
    }
}