Rails.application.routes.draw do

  get '*route' => 'home#index', :except => [ :auth ]
  root to: 'home#index'
end
