pipeline {
  agent {
    docker {
      image 'node:10.16-alpine'
      args '-p 4200:4200'
    }

  }
  stages {
    stage('Init') {
      steps {
        sh 'npm install -g @angular/cli@8.3.23'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'ng build --prod --aot --vendor-chunk --common-chunk --delete-output-path --buildOptimizer'
      }
    }

    stage('Publish') {
      steps {
        load '/var/jenkins_home/third-party-scripts/deliver-dev.groovy'
      }
    }

  }
}
