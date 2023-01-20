class UsersController < ApplicationController
  def index
    # render :json => @user.name
    render json: User.all, status: :ok
  end

  def show 
    @user = User.find(params[:id])
    render json: { user: @user.name }, status: :ok
  end

  def create
    # respond_with User.create(user_params)
    @user = User.create({ "name": params[:name] })
    render json: params
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: "User not created" }, status: :unprocessable_entity
      # render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: { user: @user.name }, status: :ok
  end

  private

  def user_params
    # params.permit(:name)
    params.require(:user).permit(:name)
  end
end
