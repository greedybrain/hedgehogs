require './config/environment'

class App < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/recipes" do
    @recipes = Recipe.all
    erb :recipes
  end

end
