@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :listing_id, :user_id, :body, :num_stars
  end
end