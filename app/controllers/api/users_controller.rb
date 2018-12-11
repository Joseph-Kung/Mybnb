class Api::UsersController < ApplicationController
  def create
    user = User.new(user_params)

    if user.save
      login(user)
    else
      render json: user.errors.full_messages, status: 400
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end