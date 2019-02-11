START TRANSACTION;

-- Set sequence
SELECT setval('accounts_id_seq', 10000);
SELECT setval('products_id_seq', 10000);

delete from accounts;
delete from products;

INSERT INTO accounts
(id, email, password, role, full_name, phone_number)
VALUES
(1, 'administrator@localhost.com', 'password', 'administrator' ,'I am administrator', '123456789'),
(2, 'editor@localhost.com', 'password', 'editor' ,'I am editor', '123456789'),
(3, 'viewer@localhost.com', 'password', 'viewer' ,'I am viewer', '123456789');

INSERT INTO products
(id, name, description, image, price, quantity, manufacturer, category)
VALUES
(1, 'Iphone X 64G', 'Đã lâu lắm rồi Apple mới ra mắt một sản phẩm với thiết kế đột phá và liều lĩnh. Dù vấp phải khá nhiều ý kiến trái chiều nhưng cũng không thể phủ nhận độ hấp dẫn của chiếc iPhone thế hệ thứ 10 này. Công nghệ bảo mật mới, loại bỏ nút home truyền thống, camera với những tính năng độc quyền, tất cả đã khiến người dùng đứng ngồi không yên cho đến khi được trên tay.', '', 25990000, 10, 'APPLE', 'PHONE'),
(2, 'Iphone 8 plus 64G', 'Apple bất ngờ ra mắt bộ đôi iPhone 8 và iPhone 8 Plus tạo ra cơn bão mới càn quét hết các bảng xếp hạng siêu phẩm. Như thường lệ, iPhone 8 Plus từ thiết kế cho tới tính năng đều mang đến cho người dùng những trải nghiệm thú vị tuyệt vời không thể bỏ lỡ.', '', 23990000, 15, 'APPLE', 'PHONE'),
(3, 'Samsung Galaxy Note 9 128GB', 'Samsung Note 9 là chiếc điện thoại hoàn hảo nhất hiện nay với tất cả các tính năng đều xuất sắc và bút S pen thông minh hơn bao giờ hết.', '', 22990000, 20, 'SAMSUNG', 'PHONE');

COMMIT;