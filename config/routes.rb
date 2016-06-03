Rails.application.routes.draw do
  match 'registry' => 'high_voltage/pages#show', id: 'registry', via: :get
  match 'home' => 'high_voltage/pages#show', id: 'home', via: :get
  match 'schedule_of_events' => 'high_voltage/pages#show', id: 'schedule_of_events', via: :get
  match 'our_story' => 'high_voltage/pages#show', id: 'our_story', via: :get
  match 'the_hotel' => 'high_voltage/pages#show', id: 'the_hotel', via: :get
  match 'the_venue' => 'high_voltage/pages#show', id: 'the_venue', via: :get
  match 'the_ceremony' => 'high_voltage/pages#show', id: 'the_ceremony', via: :get
end
