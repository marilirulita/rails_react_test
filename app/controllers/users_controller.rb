class UsersController < ApplicationController
  def index
    @user = User.find(1)
    # render :json => @user.name
    render json: { user: @user.name }, status: :ok
  end
end
