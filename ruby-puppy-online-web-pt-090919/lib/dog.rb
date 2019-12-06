Bundler.require # => this will require all of the Gems in our Gemfile
                # and allow us to use binding.pry
class Dog
    attr_reader :name

    @@all = []

    def initialize(name)
        save
        @name = name
    end

    def self.all
        binding.pry
        @@all
    end

    def self.clear_all
        @@all.clear
    end

    def self.print_all

        @@all.each do |dog|
            puts dog.name
        end
    end

    def save
        @@all << self
    end

end