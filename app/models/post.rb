class Post
  
  include Mongoid::Document
  include Mongoid::Versioning
  include Mongoid::Timestamps::Updated
  include Mongoid::Timestamps::Created
  field :name, type: String
  field :email, type: String
  field :phone, type: String
  field :address, type: String
  field :remarks, type: String
  
  

 

end
