# :name => "Spencer",
# :hair_color => "N/A",
# :height => "medium",
# :weight => "good",
# :handed => "righty",

class Person
  
  attr_accessor :name, :hair_color, :height, :weight, :handed, :hometown, :birthday, :eye_color

  def initialize(attr_hash)
    # self.name=(name)
    # self.hair_color = hair_color
    # self.send(:name=, name)
    attr_hash.each do |key, value|
      self.send("#{key}=", value)
    end
    # @name = name
    # @hair_color = hair_color
    # @height = height
    # @weight = weight
    # @handed = handed
    # @hometown = hometown
  end

end



attributes_hash = {
  name: 'george', 
  height: 5.5, 
  hair_color: 'brown', 
  weight: 115, 
  handed: 'righty',
  hometown: 'nyc'
}

Person.new(attributes_hash)