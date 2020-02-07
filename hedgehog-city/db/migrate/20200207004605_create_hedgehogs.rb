class CreateHedgehogs < ActiveRecord::Migration[6.0]
  def change
    create_table :hedgehogs do |t|

      t.timestamps
    end
end
