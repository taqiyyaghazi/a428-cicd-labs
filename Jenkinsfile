node {
  docker.image('node:lts-buster-slim -p 3000:3000').inside {
    stage('Checkout') {
      checkout scm
    }
    stage('Install dependencies') {
      sh 'npm install'
    }
    stage('Test') {
      sh './jenkins/scripts/test.sh'

    }
  }
}
