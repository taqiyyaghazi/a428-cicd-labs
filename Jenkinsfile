node {
  def reactApp
  stage('Checkout') {
    reactApp = checkout scm
  }
  stage('NodeJs') {
    tool 'NodeJS'
  }
  stage('Install dependencies') {
    sh 'npm install'
  }
}
