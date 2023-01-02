class UsersController < ApplicationController
  def index
    # render :json => @user.name
    render json: User.all, status: :ok
  end

  def show 
    @user = User.find(params[:id])
    render json: { user: @user.name }, status: :ok
  end
end
