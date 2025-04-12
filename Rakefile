require 'rake'
require 'rake/clean'

task :default => [:build]

desc "Build assets"
task :build do
  sh "npx webpack --mode production"
  sh "sass public/src/scss/main.scss public/dist/css/main.css --style compressed"
end

desc "Watch assets for development"
task :watch do
  sh "npx webpack --watch --mode development &"
  sh "sass --watch public/src/scss/main.scss:public/dist/css/main.css &"
end

CLEAN.include('public/dist/**/*')