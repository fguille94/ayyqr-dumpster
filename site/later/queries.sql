SELECT
  `users`.`id`, `users`.`username`
FROM
  `users`
    INNER JOIN `purchases` ON `purchases`.`owner_id_` = `users`.`id`
    INNER JOIN `ticket_bulks` ON `ticket_bulks`.`purchase_id_` = `purchases`.`id`
    INNER JOIN `tickets` ON `tickets`.`purchase_id_` = `purchases`.`id`
WHERE
  `tickets`.`code` LIKE '%c4ca4238a0b923825dcc509a6f75849b%';
  
  
  
  
SELECT
  `users`.`id`, `users`.`username`
FROM
  `users`
    INNER JOIN `purchases` ON `purchases`.`owner_id_` = `users`.`id`
    INNER JOIN `tickets` ON `tickets`.`purchase_id_` = `purchases`.`id`
WHERE
  `tickets`.`code` LIKE '%c4ca4238a0b923825dcc509a6f75849b%';