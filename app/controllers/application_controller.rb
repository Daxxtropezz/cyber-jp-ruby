require 'sinatra/base'
require 'sprockets'
require 'sprockets-helpers'

class ApplicationController < Sinatra::Base
  configure do
    set :sprockets, Sprockets::Environment.new(root)
    set :assets_prefix, '/assets'
    
    # Configure paths
    sprockets.append_path File.join(root, 'public/src/js')
    sprockets.append_path File.join(root, 'public/src/scss')
    
    Sprockets::Helpers.configure do |config|
      config.environment = sprockets
      config.prefix = assets_prefix
      config.digest = false # Set to true in production
    end
  end
  
  helpers do
    include Sprockets::Helpers
  end

  get '/' do
    @hacker_quotes = [
      "システムにアクセス中...",
      "暗号解読進行中...",
      "バックドアを確立...",
      "ウィルスを注入...",
      "防火壁をバイパス..."
    ]
    
    @kanji_symbols = %w[忍 影 電 脳 暗 殺 機 関]
    erb :index
  end
end