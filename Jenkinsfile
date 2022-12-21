node {
  def reactApp
  stage('Checkout') {
    reactApp = checkout scm
  }
  stage('Install dependencies') {
    sh '/c/Program Files/nodejs/npm install'
  }
}
