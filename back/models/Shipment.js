const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipment', {
    Shipment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sales_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Shipment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Shipment_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'Product_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Shipment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Shipment_id" },
        ]
      },
      {
        name: "Shipment_FK",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
    ]
  });
};
