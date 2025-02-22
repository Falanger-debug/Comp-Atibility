-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: compatibility
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chipset_speed`
--

DROP TABLE IF EXISTS `chipset_speed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chipset_speed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chipset` varchar(50) NOT NULL,
  `max_speed` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `chipset` (`chipset`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chipset_speed`
--

LOCK TABLES `chipset_speed` WRITE;
/*!40000 ALTER TABLE `chipset_speed` DISABLE KEYS */;
INSERT INTO `chipset_speed` VALUES (1,'Z790',7200),(2,'B650',6400),(3,'B760',7200),(4,'X670E',6400),(5,'B550',5400),(6,'Z690',6800),(7,'Z590',5333),(8,'X570',5100),(9,'Z77',3200),(10,'970',2133);
/*!40000 ALTER TABLE `chipset_speed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comp_case`
--

DROP TABLE IF EXISTS `comp_case`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comp_case` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `form_factor` enum('EATX','ATX','Micro-ATX','Mini-ITX') NOT NULL,
  `cooler_max_height` int NOT NULL,
  `max_gpu_length` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comp_case`
--

LOCK TABLES `comp_case` WRITE;
/*!40000 ALTER TABLE `comp_case` DISABLE KEYS */;
INSERT INTO `comp_case` VALUES (1,'NZXT','H510','ATX',165,381,'2025-02-12 11:22:48'),(2,'NZXT','H7 Flow','ATX',165,400,'2025-02-12 11:22:48'),(3,'NZXT','H1 V2','Mini-ITX',71,324,'2025-02-12 11:22:48'),(4,'NZXT','H210','Mini-ITX',165,325,'2025-02-12 11:22:48'),(5,'NZXT','H510 Elite','ATX',165,368,'2025-02-12 11:22:48'),(6,'Corsair','4000D Airflow','ATX',170,360,'2025-02-12 11:22:48'),(7,'Corsair','5000D Airflow','ATX',170,420,'2025-02-12 11:22:48'),(8,'Corsair','iCUE 5000X RGB','ATX',170,400,'2025-02-12 11:22:48'),(9,'Corsair','Crystal 280X','Micro-ATX',150,300,'2025-02-12 11:22:48'),(10,'Corsair','Obsidian 1000D','ATX',180,400,'2025-02-12 11:22:48'),(11,'Cooler Master','MasterBox TD500','ATX',165,410,'2025-02-12 11:22:48'),(12,'Cooler Master','MasterBox Q300L','Micro-ATX',157,360,'2025-02-12 11:22:48'),(13,'Cooler Master','HAF 700 EVO','ATX',166,490,'2025-02-12 11:22:48'),(14,'Cooler Master','NR200P','Mini-ITX',155,330,'2025-02-12 11:22:48'),(15,'Cooler Master','MasterCase H500','ATX',167,410,'2025-02-12 11:22:48'),(16,'Fractal Design','Meshify C','ATX',172,315,'2025-02-12 11:22:48'),(17,'Fractal Design','Define 7','ATX',185,491,'2025-02-12 11:22:48'),(18,'Fractal Design','Torrent','ATX',188,423,'2025-02-12 11:22:48'),(19,'Fractal Design','Node 202','Mini-ITX',56,310,'2025-02-12 11:22:48'),(20,'Fractal Design','Focus G','ATX',165,380,'2025-02-12 11:22:48'),(21,'Lian Li','O11 Dynamic','ATX',155,420,'2025-02-12 11:22:48'),(22,'Lian Li','PC-011 Air','ATX',167,420,'2025-02-12 11:22:48'),(23,'Lian Li','Lancool 215','ATX',166,370,'2025-02-12 11:22:48'),(24,'Lian Li','Q58','Mini-ITX',67,320,'2025-02-12 11:22:48'),(25,'Lian Li','O11D Mini','Micro-ATX',155,395,'2025-02-12 11:22:48'),(26,'Phanteks','Eclipse P500A','ATX',190,435,'2025-02-12 11:22:48'),(27,'Phanteks','Evolv X','ATX',194,435,'2025-02-12 11:22:48'),(28,'Phanteks','P360A','ATX',160,400,'2025-02-12 11:22:48'),(29,'Phanteks','Enthoo Pro 2','ATX',195,503,'2025-02-12 11:22:48'),(30,'Phanteks','Eclipse P200A','Mini-ITX',160,330,'2025-02-12 11:22:48'),(31,'be quiet!','Pure Base 500DX','ATX',190,369,'2025-02-12 11:22:48'),(32,'be quiet!','Dark Base 700','ATX',180,430,'2025-02-12 11:22:48'),(33,'be quiet!','Silent Base 802','ATX',185,432,'2025-02-12 11:22:48'),(34,'be quiet!','Pure Base 600','ATX',165,280,'2025-02-12 11:22:48'),(35,'be quiet!','Dark Base Pro 900','ATX',185,325,'2025-02-12 11:22:48'),(36,'Thermaltake','View 51 TG','ATX',175,410,'2025-02-12 11:22:48'),(37,'Thermaltake','Level 20 VT','Micro-ATX',185,350,'2025-02-12 11:22:48'),(38,'Thermaltake','Core P3 TG','ATX',180,450,'2025-02-12 11:22:48'),(39,'Thermaltake','Commander C36','ATX',170,300,'2025-02-12 11:22:48'),(40,'Thermaltake','S100 TG','Micro-ATX',165,330,'2025-02-12 11:22:48'),(41,'NZXT','H9 Flow','ATX',165,400,'2025-02-12 11:22:48'),(42,'Corsair','7000D Airflow','ATX',190,450,'2025-02-12 11:22:48'),(43,'Cooler Master','SL600M','ATX',191,318,'2025-02-12 11:22:48'),(44,'Fractal Design','Define R6','ATX',185,440,'2025-02-12 11:22:48'),(45,'Lian Li','O11 Air Mini','Micro-ATX',170,370,'2025-02-12 11:22:48'),(46,'Phanteks','Evolv Shift 2','Mini-ITX',148,335,'2025-02-12 11:22:48'),(47,'be quiet!','Shadow Base 800','ATX',180,369,'2025-02-12 11:22:48'),(48,'Thermaltake','Divider 300 TG','ATX',145,330,'2025-02-12 11:22:48'),(49,'Corsair','Crystal 680X RGB','ATX',180,330,'2025-02-12 11:22:48');
/*!40000 ALTER TABLE `comp_case` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpu`
--

DROP TABLE IF EXISTS `cpu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` enum('Intel','AMD') NOT NULL,
  `model` varchar(100) NOT NULL,
  `socket` varchar(50) NOT NULL,
  `cores` int NOT NULL,
  `threads` int NOT NULL,
  `base_clock` float NOT NULL,
  `boost_clock` float NOT NULL,
  `tdp` int NOT NULL,
  `integrated_graphics` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu`
--

LOCK TABLES `cpu` WRITE;
/*!40000 ALTER TABLE `cpu` DISABLE KEYS */;
INSERT INTO `cpu` VALUES (1,'Intel','Core i9-13900K','LGA1700',24,32,3,5.8,125,1,'2025-02-08 12:36:25'),(2,'Intel','Core i7-13700K','LGA1700',16,24,3.4,5.4,125,1,'2025-02-08 12:36:25'),(3,'Intel','Core i5-13600K','LGA1700',14,20,3.5,5.1,125,1,'2025-02-08 12:36:25'),(4,'Intel','Core i3-13100F','LGA1700',4,8,3.4,4.5,60,0,'2025-02-08 12:36:25'),(5,'AMD','Ryzen 9 7950X','AM5',16,32,4.5,5.7,170,0,'2025-02-08 12:36:25'),(6,'AMD','Ryzen 7 7700X','AM5',8,16,4.5,5.4,105,0,'2025-02-08 12:36:25'),(7,'AMD','Ryzen 5 7600X','AM5',6,12,4.7,5.3,105,1,'2025-02-08 12:36:25'),(8,'AMD','Ryzen 9 5950X','AM4',16,32,3.4,4.9,105,0,'2025-02-08 12:36:25'),(9,'AMD','Ryzen 7 5800X','AM4',8,16,3.8,4.7,105,0,'2025-02-08 12:36:25'),(10,'AMD','Ryzen 5 5600X','AM4',6,12,3.7,4.6,65,0,'2025-02-08 12:36:25');
/*!40000 ALTER TABLE `cpu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpu_cooler`
--

DROP TABLE IF EXISTS `cpu_cooler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu_cooler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `cooling_type` varchar(50) NOT NULL,
  `cooler_dimensions` varchar(100) DEFAULT NULL,
  `tdp` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu_cooler`
--

LOCK TABLES `cpu_cooler` WRITE;
/*!40000 ALTER TABLE `cpu_cooler` DISABLE KEYS */;
INSERT INTO `cpu_cooler` VALUES (1,'Noctua','NH-D15','Air','165 x 150 x 161',165,'2025-02-12 13:12:56'),(2,'be quiet!','Dark Rock Pro 4','Air','163 x 140 x 136',250,'2025-02-12 13:12:56'),(3,'Cooler Master','Hyper 212 Black Edition','Air','116.5 x 79.7 x 155',200,'2025-02-12 13:12:56'),(4,'Corsair','iCUE H150i Elite Capellix','Liquid','397 x 120 x 27',500,'2025-02-12 13:12:56'),(5,'NZXT','KRaken Z63','Liquid','276 x 120 x 27',280,'2025-02-12 13:12:56'),(7,'DeepCool','Assassin III','Air','163 x 140 x 165',250,'2025-02-12 13:12:56'),(8,'Thermaltake','Frio Extreme','Air','145 x 120 x 159',250,'2025-02-12 13:12:56'),(9,'Arctic','Liquid Freezer II 280','Liquid','394 x 140 x 27',280,'2025-02-12 13:12:56'),(10,'Noctua','NH-U12S','Air','125 x 71 x 158',150,'2025-02-12 13:12:56'),(11,'Cooler Master','MasterLiquid ML360R','Liquid','402 x 120 x 27',360,'2025-02-12 13:12:56'),(12,'EVGA','CLC 240','Liquid','282 x 120 x 27',280,'2025-02-12 13:12:56'),(13,'Zalman','CNPS10X Performa','Air','120 x 120 x 160',220,'2025-02-12 13:12:56'),(14,'Phanteks','PH-TC14PE','Air','140 x 140 x 180',220,'2025-02-12 13:12:56'),(15,'Cryorig','R1 Ultimate','Air','140 x 140 x 169',250,'2025-02-12 13:12:56'),(16,'SilverStone','Fortress FT04','Air','138 x 130 x 164',220,'2025-02-12 13:12:56'),(17,'Thermaltake','Water 3.0 Riing RGB 360','Liquid','397 x 120 x 27',500,'2025-02-12 13:12:56'),(18,'Cooler Master','MasterAir MA620M','Air','155 x 130 x 163',180,'2025-02-12 13:12:56'),(19,'be quiet!','Pure Loop 280','Liquid','322 x 140 x 28',240,'2025-02-12 13:12:56'),(20,'Corsair','Hydro Series H100i PRO RGB','Liquid','276 x 120 x 27',240,'2025-02-12 13:12:56');
/*!40000 ALTER TABLE `cpu_cooler` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpu`
--

DROP TABLE IF EXISTS `gpu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gpu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` enum('NVIDIA','AMD','Intel') NOT NULL,
  `model` varchar(100) NOT NULL,
  `vram` int NOT NULL,
  `interface` varchar(50) NOT NULL,
  `tdp` int NOT NULL,
  `recommended_psu` int NOT NULL,
  `length` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpu`
--

LOCK TABLES `gpu` WRITE;
/*!40000 ALTER TABLE `gpu` DISABLE KEYS */;
INSERT INTO `gpu` VALUES (1,'NVIDIA','RTX 4090',24,'PCIe 4.0',450,850,336,'2025-02-08 14:12:55'),(2,'NVIDIA','RTX 4080',16,'PCIe 4.0',320,750,304,'2025-02-08 14:12:55'),(3,'NVIDIA','RTX 4070 Ti',12,'PCIe 4.0',285,700,267,'2025-02-08 14:12:55'),(4,'NVIDIA','RTX 4060 Ti',8,'PCIe 4.0',160,550,242,'2025-02-08 14:12:55'),(5,'AMD','Radeon RX 7900 XTX',24,'PCIe 4.0',355,800,287,'2025-02-08 14:12:55'),(6,'AMD','Radeon RX 7900 XT',20,'PCIe 4.0',300,750,276,'2025-02-08 14:12:55'),(7,'AMD','Radeon RX 7800 XT',16,'PCIe 4.0',263,650,267,'2025-02-08 14:12:55'),(8,'AMD','Radeon RX 7700 XT',12,'PCIe 4.0',245,600,267,'2025-02-08 14:12:55'),(9,'Intel','Arc A770',16,'PCIe 4.0',225,600,267,'2025-02-08 14:12:55'),(10,'Intel','Arc A750',8,'PCIe 4.0',200,550,267,'2025-02-08 14:12:55');
/*!40000 ALTER TABLE `gpu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobo`
--

DROP TABLE IF EXISTS `mobo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `socket` varchar(50) NOT NULL,
  `chipset` varchar(50) NOT NULL,
  `form_factor` enum('EATX','ATX','Micro-ATX','Mini-ITX') NOT NULL,
  `max_memory` int NOT NULL,
  `memory_slots` int NOT NULL,
  `memory_type` enum('DDR3','DDR4','DDR5') NOT NULL,
  `slot` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobo`
--

LOCK TABLES `mobo` WRITE;
/*!40000 ALTER TABLE `mobo` DISABLE KEYS */;
INSERT INTO `mobo` VALUES (1,'ASUS','ROG Strix Z790-E Gaming','LGA1700','Z790','ATX',128,4,'DDR4','PCIe 5.0','2025-02-08 14:36:36'),(2,'MSI','MAG B650 TOMAHAWK WIFI','AM5','B650','ATX',128,4,'DDR4','PCIe 5.0','2025-02-08 14:36:36'),(3,'Gigabyte','B760 AORUS ELITE AX','LGA1700','B760','ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(4,'ASRock','X670E Taichi','AM5','X670E','ATX',128,4,'DDR4','PCIe 5.0','2025-02-08 14:36:36'),(5,'ASUS','TUF Gaming B550-PLUS','AM4','B550','ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(6,'MSI','PRO Z690-A WIFI','LGA1700','Z690','ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(7,'Gigabyte','Z590 AORUS PRO AX','LGA1200','Z590','ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(8,'ASRock','B550M Steel Legend','AM4','B550','Micro-ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(9,'ASUS','ROG STRIX X570-I GAMING','AM4','X570','Mini-ITX',64,2,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(10,'MSI','MEG X570 UNIFY','AM4','X570','ATX',128,4,'DDR4','PCIe 4.0','2025-02-08 14:36:36'),(11,'ASUS','P8Z77-V PRO','LGA1155','Z77','ATX',32,4,'DDR3','PCIe 3.0','2025-02-15 18:41:00'),(12,'Gigabyte','GA-970A-DS3P','AM3+','970','ATX',32,4,'DDR3','PCIe 3.0','2025-02-15 18:41:00'),(13,'MSI','MPG Z790 CARBON WIFI','LGA1700','Z790','ATX',192,4,'DDR5','PCIe 5.0','2025-02-15 18:41:00'),(14,'ASRock','X670E Steel Legend','AM5','X670E','ATX',192,4,'DDR5','PCIe 5.0','2025-02-15 18:41:00');
/*!40000 ALTER TABLE `mobo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobo_storage`
--

DROP TABLE IF EXISTS `mobo_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobo_storage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mobo_id` int NOT NULL,
  `interface` enum('SATA','NVMe','SSD','HDD') NOT NULL,
  `slot_count` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `mobo_id` (`mobo_id`),
  CONSTRAINT `mobo_storage_ibfk_1` FOREIGN KEY (`mobo_id`) REFERENCES `mobo` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobo_storage`
--

LOCK TABLES `mobo_storage` WRITE;
/*!40000 ALTER TABLE `mobo_storage` DISABLE KEYS */;
INSERT INTO `mobo_storage` VALUES (1,1,'SATA',6,'2025-02-20 14:59:20'),(2,1,'NVMe',4,'2025-02-20 14:59:20'),(3,2,'SATA',4,'2025-02-20 14:59:20'),(4,2,'NVMe',3,'2025-02-20 14:59:20'),(5,3,'SATA',4,'2025-02-20 14:59:20'),(6,3,'NVMe',3,'2025-02-20 14:59:20'),(7,4,'SATA',8,'2025-02-20 14:59:20'),(8,4,'NVMe',4,'2025-02-20 14:59:20'),(9,5,'SATA',6,'2025-02-20 14:59:20'),(10,5,'NVMe',2,'2025-02-20 14:59:20'),(11,6,'SATA',6,'2025-02-20 14:59:20'),(12,6,'NVMe',4,'2025-02-20 14:59:20'),(13,7,'SATA',6,'2025-02-20 14:59:20'),(14,7,'NVMe',3,'2025-02-20 14:59:20'),(15,8,'SATA',6,'2025-02-20 14:59:20'),(16,8,'NVMe',2,'2025-02-20 14:59:20'),(17,9,'SATA',4,'2025-02-20 14:59:20'),(18,9,'NVMe',2,'2025-02-20 14:59:20'),(19,10,'SATA',4,'2025-02-20 14:59:20'),(20,10,'NVMe',3,'2025-02-20 14:59:20'),(21,11,'SATA',4,'2025-02-20 14:59:20'),(22,11,'NVMe',0,'2025-02-20 14:59:20'),(23,12,'SATA',6,'2025-02-20 14:59:20'),(24,12,'NVMe',0,'2025-02-20 14:59:20'),(25,13,'SATA',6,'2025-02-20 14:59:20'),(26,13,'NVMe',5,'2025-02-20 14:59:20'),(27,14,'SATA',8,'2025-02-20 14:59:20'),(28,14,'NVMe',4,'2025-02-20 14:59:20');
/*!40000 ALTER TABLE `mobo_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `power_supply`
--

DROP TABLE IF EXISTS `power_supply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `power_supply` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `wattage` int NOT NULL,
  `efficiency_rating` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `power_supply`
--

LOCK TABLES `power_supply` WRITE;
/*!40000 ALTER TABLE `power_supply` DISABLE KEYS */;
INSERT INTO `power_supply` VALUES (1,'be quiet!','Pure Power 12 M 650W',650,'80 Plus Gold','2025-02-12 09:45:15'),(2,'be quiet!','Pure Power 12 M 1000W',1000,'80 Plus Gold','2025-02-12 09:45:15'),(3,'Corsair','RM750x',750,'80 Plus Gold','2025-02-12 09:45:15'),(4,'Corsair','AX1600i',1600,'80 Plus Titanium','2025-02-12 09:45:15'),(5,'Seasonic','Focus GX-850',850,'80 Plus Gold','2025-02-12 09:45:15'),(6,'Seasonic','Prime TX-1000',1000,'80 Plus Titanium','2025-02-12 09:45:15'),(7,'EVGA','SuperNOVA 750 G5',750,'80 Plus Gold','2025-02-12 09:45:15'),(8,'EVGA','SuperNOVA 1600 T2',1600,'80 Plus Titanium','2025-02-12 09:45:15'),(9,'Thermaltake','Toughpower GF1 850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(10,'Thermaltake','Toughpower iRGB PLUS 1250W',1250,'80 Plus Platinum','2025-02-12 09:45:15'),(11,'Cooler Master','V750 Gold V2',750,'80 Plus Gold','2025-02-12 09:45:15'),(12,'Cooler Master','V1300 Platinum',1300,'80 Plus Platinum','2025-02-12 09:45:15'),(13,'ASUS','ROG Strix 750W Gold',750,'80 Plus Gold','2025-02-12 09:45:15'),(14,'ASUS','ROG Thor 1200W Platinum',1200,'80 Plus Platinum','2025-02-12 09:45:15'),(15,'Gigabyte','AORUS P850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(16,'Gigabyte','P1000GM',1000,'80 Plus Gold','2025-02-12 09:45:15'),(17,'NZXT','C750',750,'80 Plus Gold','2025-02-12 09:45:15'),(18,'NZXT','E850',850,'80 Plus Gold','2025-02-12 09:45:15'),(19,'SilverStone','Strider Platinum ST1000-PT',1000,'80 Plus Platinum','2025-02-12 09:45:15'),(20,'SilverStone','Strider Titanium ST1500-TI',1500,'80 Plus Titanium','2025-02-12 09:45:15'),(21,'Antec','Earthwatts Gold Pro 750W',750,'80 Plus Gold','2025-02-12 09:45:15'),(22,'Antec','High Current Pro 1300W',1300,'80 Plus Platinum','2025-02-12 09:45:15'),(23,'FSP','Hydro G Pro 850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(24,'FSP','Aurum PT 1200W',1200,'80 Plus Platinum','2025-02-12 09:45:15'),(27,'XPG','Core Reactor 750W',750,'80 Plus Gold','2025-02-12 09:45:15'),(28,'XPG','Pylon 650W',650,'80 Plus Bronze','2025-02-12 09:45:15'),(29,'Fractal Design','Ion+ 760P',760,'80 Plus Platinum','2025-02-12 09:45:15'),(30,'Fractal Design','Ion Gold 850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(31,'Phanteks','Revolt Pro 850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(32,'Phanteks','Revolt X 1200W',1200,'80 Plus Platinum','2025-02-12 09:45:15'),(33,'Lian Li','SP750',750,'80 Plus Gold','2025-02-12 09:45:15'),(34,'Lian Li','PE-750',750,'80 Plus Platinum','2025-02-12 09:45:15'),(35,'Deepcool','DQ750-M-V2L',750,'80 Plus Gold','2025-02-12 09:45:15'),(36,'Deepcool','DQ850-M-V2L',850,'80 Plus Gold','2025-02-12 09:45:15'),(37,'Sharkoon','SilentStorm Cool Zero 750W',750,'80 Plus Gold','2025-02-12 09:45:15'),(38,'Sharkoon','SilentStorm Icewind 650W',650,'80 Plus Bronze','2025-02-12 09:45:15'),(39,'Chieftec','Polaris 750W',750,'80 Plus Gold','2025-02-12 09:45:15'),(40,'Chieftec','Power Smart GPS-1250C',1250,'80 Plus Gold','2025-02-12 09:45:15'),(41,'Zalman','Acrux Series 850W',850,'80 Plus Gold','2025-02-12 09:45:15'),(42,'Zalman','EBT Series 1200W',1200,'80 Plus Gold','2025-02-12 09:45:15'),(47,'Enermax','Revolution D.F. 750W',750,'80 Plus Gold','2025-02-12 09:45:15'),(48,'Enermax','MaxTytan 1250W',1250,'80 Plus Titanium','2025-02-12 09:45:15');
/*!40000 ALTER TABLE `power_supply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `type` enum('DDR3','DDR4','DDR5') NOT NULL,
  `capacity` int NOT NULL,
  `speed` int NOT NULL,
  `num_sticks` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `model` (`model`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
INSERT INTO `ram` VALUES (1,'Corsair','Vengeance LPX 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(2,'G.Skill','Trident Z RGB 32GB','DDR4',32,3600,2,'2025-02-08 14:59:30'),(3,'Kingston','FURY Beast 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(4,'Crucial','Ballistix 32GB','DDR4',32,3600,2,'2025-02-08 14:59:30'),(5,'Corsair','Dominator Platinum 64GB','DDR4',64,3600,2,'2025-02-08 14:59:30'),(6,'G.Skill','Ripjaws V 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(7,'TeamGroup','T-Force Xtreem 16GB','DDR4',16,4000,2,'2025-02-08 14:59:30'),(8,'Patriot','Viper Steel 32GB','DDR4',32,3600,2,'2025-02-08 14:59:30'),(9,'ADATA','XPG Spectrix D60G 16GB','DDR4',16,3600,2,'2025-02-08 14:59:30'),(10,'Corsair','Vengeance RGB Pro 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(11,'Kingston','HyperX Predator 32GB','DDR4',32,4000,2,'2025-02-08 14:59:30'),(12,'G.Skill','Trident Z Neo 32GB','DDR4',32,3600,2,'2025-02-08 14:59:30'),(13,'Crucial','Ballistix MAX 16GB','DDR4',16,4400,2,'2025-02-08 14:59:30'),(14,'Corsair','Vengeance LPX 8GB','DDR4',8,3000,1,'2025-02-08 14:59:30'),(15,'TeamGroup','T-Force Delta 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(16,'ADATA','XPG Gammix D30 32GB','DDR4',32,3200,2,'2025-02-08 14:59:30'),(17,'Patriot','Viper RGB 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(18,'Kingston','FURY Renegade 64GB','DDR4',64,3600,2,'2025-02-08 14:59:30'),(19,'G.Skill','Ripjaws V 32GB','DDR4',32,3200,2,'2025-02-08 14:59:30'),(20,'Corsair','Dominator Platinum RGB 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(21,'ADATA','XPG Hunter 16GB','DDR4',16,2666,1,'2025-02-08 14:59:30'),(22,'G.Skill','Trident Z Royal 16GB','DDR4',16,3600,2,'2025-02-08 14:59:30'),(23,'TeamGroup','T-Force Night Hawk 32GB','DDR4',32,3200,2,'2025-02-08 14:59:30'),(24,'Patriot','Viper 4 Blackout 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(25,'Crucial','Ballistix Sport 8GB','DDR4',8,2666,1,'2025-02-08 14:59:30'),(26,'Corsair','Vengeance LPX 32GB','DDR4',32,3200,2,'2025-02-08 14:59:30'),(27,'G.Skill','Trident Z Neo 64GB','DDR4',64,3600,2,'2025-02-08 14:59:30'),(28,'Kingston','HyperX Fury 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(29,'TeamGroup','T-Force Vulcan Z 16GB','DDR4',16,3200,2,'2025-02-08 14:59:30'),(46,'Corsair','Dominator Platinum RGB 128GB','DDR4',128,3600,4,'2025-02-15 18:24:23'),(55,'Corsair','Vengeance 16GB','DDR3',16,1600,2,'2025-02-15 18:47:13'),(56,'Kingston','HyperX Fury 8GB','DDR3',8,1866,2,'2025-02-15 18:47:13'),(57,'G.Skill','Ripjaws X 16GB','DDR3',16,2133,2,'2025-02-15 18:47:13'),(58,'Corsair','Dominator Platinum RGB 32GB','DDR5',32,6000,2,'2025-02-15 18:47:13'),(59,'G.Skill','Trident Z5 RGB 64GB','DDR5',64,6400,2,'2025-02-15 18:47:13'),(60,'Kingston','FURY Beast 32GB','DDR5',32,6000,2,'2025-02-15 18:47:13'),(61,'TeamGroup','T-Force Delta RGB 16GB','DDR5',16,6400,1,'2025-02-15 18:47:13');
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `socket`
--

DROP TABLE IF EXISTS `socket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `socket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socket`
--

LOCK TABLES `socket` WRITE;
/*!40000 ALTER TABLE `socket` DISABLE KEYS */;
INSERT INTO `socket` VALUES (3,'AM4'),(2,'AM5'),(10,'FM2+'),(5,'LGA1151'),(6,'LGA1155'),(4,'LGA1200'),(1,'LGA1700'),(7,'LGA2011'),(9,'sTRX4'),(8,'TR4');
/*!40000 ALTER TABLE `socket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) NOT NULL,
  `model` varchar(100) NOT NULL,
  `type` enum('HDD','SSD','NVMe') NOT NULL,
  `capacity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES (1,'Samsung','Samsung 970 EVO Plus','NVMe',500,'2025-02-08 15:34:44'),(2,'Samsung','Samsung 970 EVO Plus','NVMe',1000,'2025-02-08 15:34:44'),(3,'Western Digital','WD Black SN850','NVMe',500,'2025-02-08 15:34:44'),(4,'Western Digital','WD Black SN850','NVMe',1000,'2025-02-08 15:34:44'),(5,'Crucial','Crucial P5','NVMe',500,'2025-02-08 15:34:44'),(6,'Crucial','Crucial P5','NVMe',1000,'2025-02-08 15:34:44'),(7,'Seagate','Seagate FireCuda 530','NVMe',500,'2025-02-08 15:34:44'),(8,'Seagate','Seagate FireCuda 530','NVMe',1000,'2025-02-08 15:34:44'),(9,'Kingston','Kingston NV2','NVMe',500,'2025-02-08 15:34:44'),(10,'Kingston','Kingston NV2','NVMe',1000,'2025-02-08 15:34:44'),(11,'ADATA','ADATA XPG GAMMIX S70','NVMe',500,'2025-02-08 15:34:44'),(12,'ADATA','ADATA XPG GAMMIX S70','NVMe',1000,'2025-02-08 15:34:44'),(13,'Corsair','Corsair MP600','NVMe',500,'2025-02-08 15:34:44'),(14,'Corsair','Corsair MP600','NVMe',1000,'2025-02-08 15:34:44'),(15,'Patriot','Patriot Viper VP4100','NVMe',500,'2025-02-08 15:34:44'),(16,'Patriot','Patriot Viper VP4100','NVMe',1000,'2025-02-08 15:34:44'),(17,'TeamGroup','TeamGroup T-Force Cardea Zero Z440','NVMe',500,'2025-02-08 15:34:44'),(18,'TeamGroup','TeamGroup T-Force Cardea Zero Z440','NVMe',1000,'2025-02-08 15:34:44'),(19,'Intel','Intel 670p','NVMe',500,'2025-02-08 15:34:44'),(20,'Intel','Intel 670p','NVMe',1000,'2025-02-08 15:34:44'),(21,'Samsung','Samsung 860 EVO','SSD',500,'2025-02-08 15:34:44'),(22,'Samsung','Samsung 860 EVO','SSD',1000,'2025-02-08 15:34:44'),(23,'Crucial','Crucial MX500','SSD',500,'2025-02-08 15:34:44'),(24,'Crucial','Crucial MX500','SSD',1000,'2025-02-08 15:34:44'),(25,'Western Digital','WD Blue 3D NAND','SSD',500,'2025-02-08 15:34:44'),(26,'Western Digital','WD Blue 3D NAND','SSD',1000,'2025-02-08 15:34:44'),(27,'SanDisk','SanDisk Ultra 3D','SSD',500,'2025-02-08 15:34:44'),(28,'SanDisk','SanDisk Ultra 3D','SSD',1000,'2025-02-08 15:34:44'),(29,'Kingston','Kingston A2000','SSD',500,'2025-02-08 15:34:44'),(30,'Kingston','Kingston A2000','SSD',1000,'2025-02-08 15:34:44'),(31,'ADATA','ADATA SU800','SSD',500,'2025-02-08 15:34:44'),(32,'ADATA','ADATA SU800','SSD',1000,'2025-02-08 15:34:44'),(33,'Crucial','Crucial P2','SSD',500,'2025-02-08 15:34:44'),(34,'Crucial','Crucial P2','SSD',1000,'2025-02-08 15:34:44'),(35,'Corsair','Corsair MP510','SSD',500,'2025-02-08 15:34:44'),(36,'Corsair','Corsair MP510','SSD',1000,'2025-02-08 15:34:44'),(37,'Patriot','Patriot Burst','SSD',500,'2025-02-08 15:34:44'),(38,'Patriot','Patriot Burst','SSD',1000,'2025-02-08 15:34:44'),(39,'TeamGroup','TeamGroup GX2','SSD',500,'2025-02-08 15:34:44'),(40,'TeamGroup','TeamGroup GX2','SSD',1000,'2025-02-08 15:34:44'),(41,'Seagate','Seagate Barracuda 7200.14','HDD',500,'2025-02-08 15:34:44'),(42,'Seagate','Seagate Barracuda 7200.14','HDD',1000,'2025-02-08 15:34:44'),(43,'Western Digital','WD Blue','HDD',500,'2025-02-08 15:34:44'),(44,'Western Digital','WD Blue','HDD',1000,'2025-02-08 15:34:44'),(45,'Toshiba','Toshiba X300','HDD',500,'2025-02-08 15:34:44'),(46,'Toshiba','Toshiba X300','HDD',1000,'2025-02-08 15:34:44'),(47,'Hitachi','HGST Deskstar','HDD',500,'2025-02-08 15:34:44'),(48,'Hitachi','HGST Deskstar','HDD',1000,'2025-02-08 15:34:44'),(49,'Samsung','Samsung SpinPoint F3','HDD',500,'2025-02-08 15:34:44'),(50,'Samsung','Samsung SpinPoint F3','HDD',1000,'2025-02-08 15:34:44'),(51,'Seagate','Seagate IronWolf','HDD',500,'2025-02-08 15:34:44'),(52,'Seagate','Seagate IronWolf','HDD',1000,'2025-02-08 15:34:44'),(53,'Western Digital','WD Black','HDD',500,'2025-02-08 15:34:44'),(54,'Western Digital','WD Black','HDD',1000,'2025-02-08 15:34:44'),(55,'Toshiba','Toshiba L200','HDD',500,'2025-02-08 15:34:44'),(56,'Toshiba','Toshiba L200','HDD',1000,'2025-02-08 15:34:44'),(57,'HGST','HGST Ultrastar','HDD',500,'2025-02-08 15:34:44'),(58,'HGST','HGST Ultrastar','HDD',1000,'2025-02-08 15:34:44'),(59,'Maxtor','Maxtor M3','HDD',500,'2025-02-08 15:34:44'),(60,'Maxtor','Maxtor M3','HDD',1000,'2025-02-08 15:34:44');
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-22 15:02:59
