node {
  docker.image('node:lts-buster-slim').inside ('-p 3000:3000') {
    stage('Checkout') {
      checkout scm
    }
    stage('Build') {
      sh 'npm install'
    }
    stage('Test') {
      sh './jenkins/scripts/test.sh'
      input message: 'Lanjutkan ke tahap Deploy? (Click "Proceed" to continue)'
    }
    stage('Deliver') {
      sh './jenkins/scripts/deliver.sh'
      sleep 60
      sh './jenkins/scripts/kill.sh'
    }
  }
}
