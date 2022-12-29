class UsersController < ApplicationController
  def index
    render :json => User.all
    # render json: { user: User.all }, status: :ok
  end
end
