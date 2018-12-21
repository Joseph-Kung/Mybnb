Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    
    resources :listings, only: [:create, :index, :show, :destroy] do 
      resources :bookings, only: [:index]
      resources :reviews, only: [:index]
    end
    resources :bookings, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:create, :destroy]
  end
end
