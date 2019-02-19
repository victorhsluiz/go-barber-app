module.exports = {
	dialect: "postgres",
	host: "127.0.0.1",
	username: "admin",
	password: "pwdadminpostg",
	database: "go-barber",
	operatorAliases: false,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	}
};
