node {
  docker.image('node:lts-buster-slim').inside {
    stage('Checkout') {
      checkout scm
    }
    stage('Build') {
      sh 'rm -r node_modules/'
      sh 'rm package-lock.json'
      sh 'ls'
      sh 'npm cache clean --force'
      sh 'npm install'
    }
    stage('Test') {
      sh './jenkins/scripts/test.sh'
    }
  }
}
