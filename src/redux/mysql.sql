ALTER USER 'your_username'@'localhost' IDENTIFIED WITH mysql_native_password BY '1';
FLUSH PRIVILEGES;
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  confirm_password VARCHAR(255) NOT NULL
);
