node {
  docker.image('node:lts-buster-slim').inside {
    stage('Checkout') {
      checkout scm
    }
    stage('Build') {
      sh 'npm install'
    }
    stage('Test') {
      sh './jenkins/scripts/test.sh'
    }
    stage('Deliver') {
      sh './jenkins/scripts/deliver.sh'
      input message: 'Finished using the web site? (Click "Proceed" to continue)'
      sh './jenkins/scripts/kill.sh'
    }
  }
}
