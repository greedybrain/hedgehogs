class Dog
    attr_accessor :name, :breed, :id

    def initialize(name:, breed:, id: nil)
        @name = name
        @breed = breed
        @id = id
    end

    def self.create_table
        sql = <<-SQL
            CREATE TABLE IF NOT EXISTS dogs (
                id INTEGER PRIMARY KEY,
                name TEXT,
                breed TEXT
            )
        SQL
        DB[:conn].execute(sql)
    end

    def self.drop_table
        sql = 'DROP TABLE IF EXISTS dogs'
        DB[:conn].execute(sql)
    end

    def save
        if !self.id
            sql = <<-SQL
            INSERT INTO dogs
            (name, breed)
            VALUES (?,?)
            SQL
            DB[:conn].execute(sql, self.name, self.breed)
            @id = DB[:conn].execute('SELECT last_insert_rowid() FROM dogs')[0][0]
            self.id = @id
        else
            puts "This record has already been saved."
        end
        self
    end

    def update
        sql = <<-SQL
        UPDATE dogs
        SET name = (?)
        WHERE id = (?)
    SQL
    DB[:conn].execute(sql, self.name, self.id)
    self
    end

end