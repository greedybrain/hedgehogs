class CreateGeese < ActiveRecord::Migration[6.0]
  def change
    create_table :geeses do |t|
      t.string :name
    end
  end
end
