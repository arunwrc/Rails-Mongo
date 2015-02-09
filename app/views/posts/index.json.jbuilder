json.array!(@posts) do |post|
  json.extract! post, :id, :name, :email, :phone, :address, :remarks
  json.url post_url(post, format: :json)
end
