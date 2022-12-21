agent {
    docker {
        image 'node:lts-bullseye-slim'
        args '-p 3000:3000'
    }
}

node {
  def reactApp
  stage('Checkout') {
    reactApp = checkout scm
  }
  stage('Install dependencies') {
    sh 'npm install'
  }
  stage('Test') {
    sh 'npm test'
  }
}

triggers {
  pollSCM('*/2 * * * *')
}
