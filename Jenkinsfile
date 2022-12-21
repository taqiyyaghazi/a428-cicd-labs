node {
  def reactApp
  stage('Checkout') {
    reactApp = checkout scm
  }
  stage('Install dependencies') {
    sh 'npm install'
  }
  stage('Test') {
    sh './jenkins/scripts/test.sh' 
  }
}

triggers {
  pollSCM('*/2 * * * *')
}