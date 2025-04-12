require './app'
require 'sprockets'

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path 'public/src/js'
  environment.append_path 'public/src/scss'
  run environment
end

run ApplicationController