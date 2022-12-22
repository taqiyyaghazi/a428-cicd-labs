node {
  docker.image('node:lts-buster-slim').inside {
    stage('Checkout') {
      checkout scm
    }
    stage('Build') {
      sh 'npm cache clean --force'
      sh 'npm install'
    }
    stage('Test') {
      sh './jenkins/scripts/test.sh'
    }
  }
}
