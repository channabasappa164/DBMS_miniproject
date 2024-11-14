-- MySQL dump 10.13  Distrib 5.7.24, for osx11.1 (x86_64)
--
-- Host: localhost    Database: miniproject
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Bills`
--

DROP TABLE IF EXISTS `Bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bills` (
  `Bid` int NOT NULL AUTO_INCREMENT,
  `Pid` int DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Method` varchar(50) DEFAULT NULL,
  `Timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Bid`),
  KEY `Pid` (`Pid`),
  CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`Pid`) REFERENCES `Patients` (`Pid`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bills`
--

LOCK TABLES `Bills` WRITE;
/*!40000 ALTER TABLE `Bills` DISABLE KEYS */;
INSERT INTO `Bills` VALUES (1,1,150.00,'Debit Card','2024-10-06 08:17:55'),(2,1,200.00,'Debit Card','2024-10-06 08:24:12'),(3,1,200.00,'Cash','2024-10-06 08:37:38'),(4,1,200.00,'Credit Card','2024-10-06 08:39:49'),(5,1,200.00,'EMI','2024-10-06 08:40:04'),(6,1,150.00,'Cash','2024-10-07 03:41:43'),(7,1,300.00,'Credit Card','2024-10-07 03:45:46'),(8,1,5000.00,'EMI','2024-10-08 08:33:15'),(9,1,200.00,'Cash','2024-10-11 06:40:45'),(10,1,200.00,'Debit Card','2024-10-11 07:12:06'),(11,7,200.00,'Credit Card','2024-10-11 07:15:01'),(12,7,150.00,'Cash','2024-10-11 07:18:09'),(13,7,200.00,'EMI','2024-10-11 07:19:37'),(14,7,5000.00,'Debit Card','2024-10-19 13:25:47'),(15,4,100.00,'Room','2024-10-20 05:19:28'),(16,4,500.00,'Service','2024-10-20 05:19:28'),(17,4,4500.00,'Service','2024-10-20 05:19:28'),(18,4,200.00,'Room Assignment','2024-10-20 06:52:50'),(19,4,210.00,'Service','2024-10-20 06:52:50'),(20,4,500.00,'Service','2024-10-20 06:52:50'),(21,4,310.00,'Service','2024-10-20 06:52:50'),(22,4,100.00,'Room Assignment','2024-10-20 06:55:54'),(23,4,200.00,'Service','2024-10-20 06:55:54'),(24,4,320.00,'Room Assignment','2024-10-20 07:05:58'),(25,4,200.00,'Service','2024-10-20 07:05:58'),(26,7,5000.00,'EMI','2024-10-20 07:10:38'),(27,7,150.00,'Cash','2024-10-20 07:18:19'),(28,7,500.00,'Debit Card','2024-10-20 07:20:22'),(29,7,800.00,'Cash','2024-10-20 07:22:36'),(30,4,180.00,'Room Assignment','2024-10-20 07:23:53'),(31,4,200.00,'Service','2024-10-20 07:23:53'),(32,4,150.00,'Service','2024-10-20 07:23:53'),(33,7,200.00,'EMI','2024-10-22 08:31:59'),(34,4,550.00,'Room Assignment','2024-10-22 08:32:52'),(35,4,5000.00,'Service','2024-10-22 08:32:52'),(36,4,300.00,'Service','2024-10-22 08:32:52'),(37,4,1000.00,'Service','2024-10-22 08:32:52'),(38,7,900.00,'Credit Card','2024-10-22 09:04:10'),(39,4,250.00,'Room Assignment','2024-10-22 09:05:50'),(40,4,350.00,'Service','2024-10-22 09:05:50'),(41,4,1000.00,'Service','2024-10-22 09:05:50'),(42,4,1500.00,'Service','2024-10-22 09:05:50'),(43,4,200.00,'Room Assignment','2024-10-22 09:15:52'),(44,4,1000.00,'Service','2024-10-22 09:15:52'),(45,4,120.00,'Service','2024-10-22 09:15:52'),(46,7,200.00,'Cash','2024-10-22 09:16:36'),(47,99,120.00,'Room Assignment','2024-11-11 16:15:04'),(48,99,200.00,'Service','2024-11-11 16:15:04'),(49,99,150.00,'Service','2024-11-11 16:15:04'),(50,99,1000.00,'Service','2024-11-11 16:15:04'),(51,4,130.00,'Room Assignment','2024-11-11 16:26:40'),(52,4,200.00,'Service','2024-11-11 16:26:40'),(53,4,5000.00,'Service','2024-11-11 16:26:40'),(54,4,300.00,'Service','2024-11-11 16:26:40'),(55,4,210.00,'Room Assignment','2024-11-11 16:28:16'),(56,4,5000.00,'Service','2024-11-11 16:28:16'),(57,4,300.00,'Service','2024-11-11 16:28:16'),(58,4,100.00,'Room Assignment','2024-11-11 17:09:20'),(59,4,200.00,'Service','2024-11-11 17:09:20'),(60,99,600.00,'Room Assignment','2024-11-11 17:09:57'),(61,99,5000.00,'Service','2024-11-11 17:09:57'),(62,99,200.00,'Service','2024-11-11 17:09:57'),(63,2,180.00,'Room Assignment','2024-11-11 17:11:13'),(64,2,5000.00,'Service','2024-11-11 17:11:13'),(65,2,200.00,'Service','2024-11-11 17:11:13'),(66,4,100.00,'Room Assignment','2024-11-11 17:12:57'),(67,4,5000.00,'Service','2024-11-11 17:12:57'),(68,5,250.00,'Room Assignment','2024-11-11 17:14:12'),(69,5,5000.00,'Service','2024-11-11 17:14:12'),(70,6,210.00,'Room Assignment','2024-11-11 17:15:40'),(71,6,200.00,'Service','2024-11-11 17:15:40'),(72,6,210.00,'Room Assignment','2024-11-11 17:15:49'),(73,6,500.00,'Service','2024-11-11 17:15:49'),(74,4,200.00,'Room Assignment','2024-11-11 17:16:24'),(75,4,300.00,'Service','2024-11-11 17:16:24'),(76,4,300.00,'Service','2024-11-11 17:16:24'),(77,4,500.00,'Room Assignment','2024-11-11 17:17:40'),(78,4,200.00,'Service','2024-11-11 17:17:40'),(79,4,120.00,'Room Assignment','2024-11-11 17:17:53'),(80,4,7500.00,'Service','2024-11-11 17:17:53'),(81,7,300.00,'Room Assignment','2024-11-11 17:18:09'),(82,7,200.00,'Service','2024-11-11 17:18:09'),(83,NULL,NULL,NULL,'2024-11-11 18:47:11'),(84,NULL,NULL,NULL,'2024-11-12 08:29:17'),(85,4,100.00,'Room Assignment','2024-11-12 09:21:32'),(86,4,200.00,'Service','2024-11-12 09:21:32'),(87,4,250.00,'Service','2024-11-12 09:21:32'),(88,NULL,NULL,NULL,'2024-11-12 09:29:25'),(89,NULL,NULL,NULL,'2024-11-12 09:30:26'),(90,4,100.00,'Room Assignment','2024-11-12 09:31:10'),(91,4,200.00,'Service','2024-11-12 09:31:10'),(92,99,180.00,'Room Assignment','2024-11-12 09:33:09'),(93,99,200.00,'Service','2024-11-12 09:33:09'),(94,4,250.00,'Room Assignment','2024-11-12 09:35:33'),(95,4,5000.00,'Service','2024-11-12 09:35:33'),(96,4,4500.00,'Service','2024-11-12 09:35:33'),(97,4,100.00,'Room Assignment','2024-11-12 09:36:06'),(98,4,200.00,'Service','2024-11-12 09:36:06'),(99,4,600.00,'Room Assignment','2024-11-12 09:36:56'),(100,4,250.00,'Service','2024-11-12 09:36:56'),(101,5,600.00,'Room Assignment','2024-11-12 09:37:16'),(102,5,300.00,'Service','2024-11-12 09:37:16'),(103,6,600.00,'Room Assignment','2024-11-12 09:37:26'),(104,6,1000.00,'Service','2024-11-12 09:37:26'),(105,4,600.00,'Room Assignment','2024-11-12 09:38:40'),(106,4,200.00,'Service','2024-11-12 09:38:40'),(107,5,200.00,'Room Assignment','2024-11-12 09:39:10'),(108,5,300.00,'Service','2024-11-12 09:39:10'),(109,4,210.00,'Room Assignment','2024-11-12 09:39:27'),(110,4,250.00,'Service','2024-11-12 09:39:27'),(111,7,250.00,'Room Assignment','2024-11-12 09:40:49'),(112,7,200.00,'Service','2024-11-12 09:40:49');
/*!40000 ALTER TABLE `Bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departments` (
  `Did` int NOT NULL,
  `Dname` varchar(255) DEFAULT NULL,
  `Ddesc` varchar(255) DEFAULT NULL,
  `Dloc` varchar(255) DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  PRIMARY KEY (`Did`),
  KEY `Hid` (`Hid`),
  CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`Hid`) REFERENCES `Hospitals` (`Hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'Cardiology','Heart and vascular care','1st Floor',1),(2,'Orthopedics','Bone and joint care','2nd Floor',1),(3,'Pediatrics','Care for children','3rd Floor',2),(4,'Surgery','Surgical procedures','4th Floor',2),(5,'Emergency','Emergency services','Ground Floor',3),(6,'Neurology','Nerve and brain care','2nd Floor',3);
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctors` (
  `Docid` int NOT NULL,
  `Docname` varchar(255) DEFAULT NULL,
  `Sex` char(1) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Speciality` varchar(255) DEFAULT NULL,
  `Did` int DEFAULT NULL,
  PRIMARY KEY (`Docid`),
  UNIQUE KEY `Did` (`Did`),
  CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`Did`) REFERENCES `Departments` (`Did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'Dr. Sarah Johnson','F','1985-02-15','Cardiology',1),(2,'Dr. Emily Davis','F','1979-08-30','Orthopedics',2),(3,'Dr. Robert Brown','M','1982-05-20','Pediatrics',3),(4,'Dr. Michael White','M','1975-11-25','Surgery',4),(5,'Dr. Anna Black','F','1990-03-12','Neurology',5);
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employees`
--

DROP TABLE IF EXISTS `Employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Employees` (
  `Eid` int NOT NULL,
  `Ename` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Phone_No` varchar(15) DEFAULT NULL,
  `Sex` char(1) DEFAULT NULL,
  PRIMARY KEY (`Eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employees`
--

LOCK TABLES `Employees` WRITE;
/*!40000 ALTER TABLE `Employees` DISABLE KEYS */;
INSERT INTO `Employees` VALUES (1,'Dr. Sarah Johnson','101 Medical Lane, Cityville','555-1001','F'),(2,'Nurse Mark Smith','202 Healthcare Rd, Cityville','555-1002','M'),(3,'Dr. Emily Davis','303 Wellness Blvd, Cityville','555-1003','F'),(4,'Nurse Linda Green','404 Health St, Cityville','555-1004','F'),(5,'Dr. Robert Brown','505 Care Ave, Cityville','555-1005','M'),(6,'Julia Roberts','123 Main St, Cityville','555-0001','F'),(7,'Brian Taylor','123 Main St, Cityville','555-0002','M'),(8,'Anne Hathaway','123 Main St, Cityville','555-0003','F'),(9,'Max Johnson','123 Main St, Cityville','555-0004','M'),(10,'Lisa Kudrow','456 Elm St, Cityville','555-0005','F'),(11,'Ethan Hawke','456 Elm St, Cityville','555-0006','M'),(12,'Sarah Connor','456 Elm St, Cityville','555-0007','F'),(13,'Derek Shepherd','456 Elm St, Cityville','555-0008','M'),(14,'Chloe Grace','789 Oak St, Cityville','555-0009','F'),(15,'Lucas Scott','789 Oak St, Cityville','555-0010','M'),(16,'Emma Watson','789 Oak St, Cityville','555-0011','F'),(17,'Jack Sparrow','789 Oak St, Cityville','555-0012','M');
/*!40000 ALTER TABLE `Employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hospitals`
--

DROP TABLE IF EXISTS `Hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hospitals` (
  `Hid` int NOT NULL,
  `Hname` varchar(255) DEFAULT NULL,
  `Hloc` varchar(255) DEFAULT NULL,
  `Speciality` varchar(255) DEFAULT NULL,
  `Contact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hospitals`
--

LOCK TABLES `Hospitals` WRITE;
/*!40000 ALTER TABLE `Hospitals` DISABLE KEYS */;
INSERT INTO `Hospitals` VALUES (1,'City General Hospital','123 Main St, Cityville','Cardiology, Orthopedics','555-0123'),(2,'Downtown Medical Center','456 Elm St, Cityville','Pediatrics, Surgery','555-0456'),(3,'Green Valley Hospital','789 Oak St, Cityville','Emergency, Neurology','555-0789');
/*!40000 ALTER TABLE `Hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inpatient`
--

DROP TABLE IF EXISTS `inpatient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inpatient` (
  `InpatientID` int NOT NULL AUTO_INCREMENT,
  `Pid` int NOT NULL,
  `Hname` varchar(255) NOT NULL,
  `Rid` int NOT NULL,
  `Eid` int NOT NULL,
  `AdmissionDate` date DEFAULT NULL,
  PRIMARY KEY (`InpatientID`),
  KEY `Pid` (`Pid`),
  KEY `Sid` (`Rid`),
  KEY `Eid` (`Eid`),
  CONSTRAINT `inpatient_ibfk_1` FOREIGN KEY (`Pid`) REFERENCES `patients` (`Pid`),
  CONSTRAINT `inpatient_ibfk_3` FOREIGN KEY (`Rid`) REFERENCES `services` (`Sid`),
  CONSTRAINT `inpatient_ibfk_4` FOREIGN KEY (`Eid`) REFERENCES `employees` (`Eid`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inpatient`
--

LOCK TABLES `inpatient` WRITE;
/*!40000 ALTER TABLE `inpatient` DISABLE KEYS */;
INSERT INTO `inpatient` VALUES (14,2,'City Hospital',2,6,'2024-11-11'),(22,7,'City Hospital',7,6,'2024-11-11'),(32,4,'City Hospital',12,6,'2024-11-12'),(33,5,'City Hospital',6,6,'2024-11-12'),(34,4,'City Hospital',10,6,'2024-11-12'),(35,7,'City Hospital',3,8,'2024-11-12');
/*!40000 ALTER TABLE `inpatient` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_room_availability_after_assignment` AFTER INSERT ON `inpatient` FOR EACH ROW BEGIN
    DECLARE occupied_beds INT;

    -- Count current assignments for the room to check against capacity
    SELECT COUNT(*) INTO occupied_beds
    FROM inpatient
    WHERE Rid = NEW.Rid;

    -- Update availability to 0 if room is fully occupied
    IF occupied_beds >= (SELECT Capacity FROM rooms WHERE Rid = NEW.Rid) THEN
        UPDATE rooms
        SET Availability = 0
        WHERE Rid = NEW.Rid;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_room_availability_after_discharge` AFTER DELETE ON `inpatient` FOR EACH ROW BEGIN
    DECLARE occupied_beds INT;

    -- Count remaining assignments for the room after discharge
    SELECT COUNT(*) INTO occupied_beds
    FROM inpatient
    WHERE Rid = OLD.Rid;

    -- Update availability to 1 if room is not fully occupied
    IF occupied_beds < (SELECT Capacity FROM rooms WHERE Rid = OLD.Rid) THEN
        UPDATE rooms
        SET Availability = 1
        WHERE Rid = OLD.Rid;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `medical_records`
--

DROP TABLE IF EXISTS `medical_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_records` (
  `Record_No` int NOT NULL,
  `Pid` int DEFAULT NULL,
  `Eid` int DEFAULT NULL,
  `Report` text,
  PRIMARY KEY (`Record_No`),
  KEY `Pid` (`Pid`),
  KEY `Eid` (`Eid`),
  CONSTRAINT `medical_records_ibfk_1` FOREIGN KEY (`Pid`) REFERENCES `Patients` (`Pid`),
  CONSTRAINT `medical_records_ibfk_2` FOREIGN KEY (`Eid`) REFERENCES `Employees` (`Eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_records`
--

LOCK TABLES `medical_records` WRITE;
/*!40000 ALTER TABLE `medical_records` DISABLE KEYS */;
INSERT INTO `medical_records` VALUES (1,1,1,'Blood Test: Normal'),(2,1,2,'X-Ray: No Issues'),(3,2,1,'MRI: Minor Injury Observed'),(4,3,3,'Consultation: Follow-up needed'),(5,2,1,'Vaccination: Completed'),(6,4,1,'Routine Blood Check: All parameters normal.'),(7,4,2,'CT Scan: No abnormalities detected.'),(8,7,1,'Blood Pressure Check: Slightly elevated.'),(9,7,3,'Vaccination: Administered flu vaccine.'),(10,4,1,'Follow-up Consultation: Patient advised to continue medication.'),(11,7,1,'Check-up: General health assessment.'),(12,7,2,'Blood Work: All results within normal limits.'),(13,7,3,'Follow-up: Reviewed blood pressure results.'),(14,7,1,'X-Ray: No abnormalities detected.'),(15,7,3,'Vaccination: Administered tetanus shot.'),(99,7,5,'need to sleep');
/*!40000 ALTER TABLE `medical_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nurses`
--

DROP TABLE IF EXISTS `nurses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nurses` (
  `Nid` int NOT NULL,
  `Nname` varchar(255) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Sex` char(1) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Eid` int DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  PRIMARY KEY (`Nid`),
  KEY `Eid` (`Eid`),
  KEY `FK_Hospital_Nurse` (`Hid`),
  CONSTRAINT `FK_Hospital_Nurse` FOREIGN KEY (`Hid`) REFERENCES `hospitals` (`Hid`),
  CONSTRAINT `nurses_ibfk_1` FOREIGN KEY (`Eid`) REFERENCES `Employees` (`Eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nurses`
--

LOCK TABLES `nurses` WRITE;
/*!40000 ALTER TABLE `nurses` DISABLE KEYS */;
INSERT INTO `nurses` VALUES (1,'Nurse Julia','1985-07-15','F','Ward 1',1,1),(2,'Nurse Brian','1982-04-10','M','Ward 2',2,1),(3,'Nurse Anne','1990-12-30','F','Ward 3',3,1),(4,'Nurse Max','1978-08-20','M','Ward 4',4,1),(5,'Nurse Lisa','1989-01-22','F','Pediatric Unit',5,2),(6,'Nurse Ethan','1993-07-05','M','Surgical Unit',6,2),(7,'Nurse Sarah','1984-09-17','F','Recovery Room',7,2),(8,'Nurse Derek','1986-11-08','M','ICU',8,2),(9,'Nurse Chloe','1991-03-23','F','Emergency Room',9,3),(10,'Nurse Lucas','1979-02-14','M','Neurology Ward',10,3),(11,'Nurse Emma','1987-05-18','F','Cardiac Care',11,3),(12,'Nurse Jack','1983-01-09','M','General Ward',12,3);
/*!40000 ALTER TABLE `nurses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patients`
--

DROP TABLE IF EXISTS `Patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Patients` (
  `Pid` int NOT NULL,
  `Pname` varchar(255) DEFAULT NULL,
  `Blood_type` varchar(10) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Sex` char(1) DEFAULT NULL,
  `Phone_No` varchar(15) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Emergency_Contact` varchar(255) DEFAULT NULL,
  `Insurance_Provider` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Patient_Type` enum('In-Patient','Out-Patient') NOT NULL DEFAULT 'Out-Patient',
  PRIMARY KEY (`Pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patients`
--

LOCK TABLES `Patients` WRITE;
/*!40000 ALTER TABLE `Patients` DISABLE KEYS */;
INSERT INTO `Patients` VALUES (1,'John Doe','O+','1990-05-15','M','123-456-7890','john.doe@example.com','2024-10-03 14:55:24','Jane Doe, 987-654-3210','Health Insurance Co.','securepassword123','123 Elm St, City, State, 12345','In-Patient'),(2,'Alice Smith','A-','1985-11-30','F','234-567-8901','alice.smith@example.com','2024-10-03 14:55:24','Bob Smith, 876-543-2109','Life Insurance Corp.','anothersecurepassword456','456 Oak St, City, State, 54321','Out-Patient'),(3,'q','B+','2004-02-16','M','2','c@gmail.com','2024-10-06 05:21:06','1','hosp','c','q','Out-Patient'),(4,'Akshaj','B+','1111-11-11','F','1234','a@gmail.com','2024-10-06 05:26:06','999999','idk','idk','why','In-Patient'),(5,'r','B+','1111-11-11','O','4','e@gmail.com','2024-10-06 05:27:11','4','3','e','s','In-Patient'),(6,'t','t','2222-02-22','M','4','w@gmail.com','2024-10-06 05:49:25','2','w','w','w','In-Patient'),(7,'channabasappa','B+','2004-04-16','M','7019281964','channabasappa164@gmail.com','2024-10-11 06:50:55','9844080744','LIC','cvp','bangalore','Out-Patient'),(90,'a','a','1111-11-11','M','1','1@gmail.com','2024-11-11 16:45:27','1','bajaj','1','#9, 52nd cross 8th main 4th block, Rajajinagar Bangalore','In-Patient'),(99,'q','b+ve','2002-04-16','M','12345','q@gmail.com','2024-11-11 16:13:09','09876','bajaj','q','bangalore','Out-Patient');
/*!40000 ALTER TABLE `Patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rooms` (
  `Rid` int NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `Capacity` int DEFAULT NULL,
  `Availability` tinyint(1) DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Rid`),
  KEY `Hid` (`Hid`),
  CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`Hid`) REFERENCES `Hospitals` (`Hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'Single','Floor 1',1,1,1,100.00),(2,'Double','Floor 1',2,1,1,180.00),(3,'Suite','Floor 2',1,0,1,250.00),(4,'ICU','Floor 2',1,1,1,500.00),(5,'Single','Ground Floor',1,1,2,120.00),(6,'Double','Ground Floor',2,1,2,200.00),(7,'Suite','First Floor',1,1,2,300.00),(8,'ICU','First Floor',1,1,2,550.00),(9,'Single','Second Floor',1,1,3,130.00),(10,'Double','Second Floor',2,1,3,210.00),(11,'Suite','Third Floor',1,1,3,320.00),(12,'ICU','Third Floor',1,0,3,600.00);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Services`
--

DROP TABLE IF EXISTS `Services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Services` (
  `Sid` int NOT NULL,
  `Sname` varchar(255) DEFAULT NULL,
  `Description` text,
  `Location` varchar(255) DEFAULT NULL,
  `Hid` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Sid`),
  KEY `Hid` (`Hid`),
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`Hid`) REFERENCES `Hospitals` (`Hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Services`
--

LOCK TABLES `Services` WRITE;
/*!40000 ALTER TABLE `Services` DISABLE KEYS */;
INSERT INTO `Services` VALUES (1,'Heart Checkup','Comprehensive heart checkup','Cardiology Unit',1,200.00),(2,'Joint Replacement','Surgical replacement of joints','Orthopedics Unit',1,5000.00),(3,'Child Vaccination','Vaccination services for children','Pediatrics Unit',2,150.00),(4,'Emergency Care','24/7 emergency medical care','Emergency Unit',3,300.00),(5,'Neurology Consultation','Consultation for neurological issues','Neurology Unit',3,250.00),(6,'Cardiac Surgery','Advanced cardiac surgical procedures','Cardiac Surgery Unit',1,7500.00),(7,'Radiology','Radiological services including MRI and CT scans','Radiology Department',1,500.00),(8,'Pediatric Cardiology','Heart care for children','Pediatric Cardiology Unit',1,300.00),(9,'Orthopedic Surgery','Advanced bone surgery','Orthopedic Surgery Unit',1,4500.00),(10,'Dermatology','Skin care services','Dermatology Unit',1,350.00),(11,'Maternity Care','Comprehensive maternity care','Maternity Ward',1,1000.00),(12,'Neonatal Care','Intensive care for newborns','Neonatal Unit',1,1500.00),(13,'General Surgery','Various general surgical procedures','Surgery Unit',1,2000.00),(14,'Urology','Kidney and urinary system care','Urology Department',1,250.00),(15,'Endocrinology','Hormone-related treatments','Endocrinology Unit',1,300.00),(16,'Gastroenterology','Digestive system care','Gastroenterology Unit',1,220.00),(17,'Oncology','Cancer treatment and care','Oncology Unit',1,800.00),(18,'Physical Therapy','Rehabilitation services','Physical Therapy Department',1,100.00),(19,'Ophthalmology','Eye care services','Ophthalmology Unit',1,150.00),(20,'ENT Services','Ear, nose, and throat care','ENT Unit',1,200.00),(21,'Allergy and Immunology','Treatment for allergies and immune system disorders','Allergy Department',2,200.00),(22,'Obstetrics','Care for pregnant women','Obstetrics Department',2,900.00),(23,'General Pediatrics','General medical care for children','Pediatrics Department',2,150.00),(24,'Adolescent Medicine','Special care for teenagers','Teen Health Unit',2,180.00),(25,'Surgical Pediatrics','Surgical care specifically for children','Pediatric Surgery Unit',2,4200.00),(26,'Neonatology','Care for newborns with special needs','Neonatology Unit',2,1600.00),(27,'Geriatrics','Healthcare for elderly patients','Geriatric Care Unit',2,300.00),(28,'Rehabilitation Services','Physical and occupational therapy','Rehabilitation Center',2,250.00),(29,'Podiatry','Foot and ankle care','Podiatry Department',2,190.00),(30,'Infectious Diseases','Treatment of complex infections','Infectious Disease Unit',2,210.00),(31,'Psychiatry','Mental health services','Psychiatry Department',2,220.00),(32,'Sports Medicine','Medical care for sports injuries','Sports Medicine Center',2,230.00),(33,'Plastic Surgery','Cosmetic and reconstructive surgeries','Plastic Surgery Unit',2,4600.00),(34,'Dental Care','Dental services for all ages','Dental Unit',2,120.00),(35,'Optometry','Vision care and eyeglass prescriptions','Optometry Department',2,130.00),(36,'Emergency Surgery','Immediate surgical interventions','Emergency Surgery Unit',3,5200.00),(37,'Cardiac Emergency','Urgent care for cardiac patients','Cardiac Emergency Unit',3,3000.00),(38,'Toxicology','Treatment for poisoning and overdoses','Toxicology Department',3,400.00),(39,'Burn Treatment','Specialized care for burn victims','Burn Treatment Unit',3,2200.00),(40,'Stroke Care','Acute treatment and rehabilitation for stroke patients','Stroke Care Unit',3,3100.00),(41,'Trauma Care','Comprehensive trauma care and surgery','Trauma Center',3,4700.00),(42,'Radiology','Advanced imaging services','Radiology Department',3,300.00),(43,'Pathology','Laboratory tests and disease diagnostics','Pathology Lab',3,110.00),(44,'Endoscopy','Diagnostic and therapeutic endoscopic procedures','Endoscopy Unit',3,600.00),(45,'Palliative Care','Care aimed at improving the quality of life for patients with serious illnesses','Palliative Care Unit',3,210.00),(46,'Sleep Disorders','Diagnosis and treatment of sleep-related disorders','Sleep Disorder Clinic',3,500.00),(47,'Hematology','Care for blood disorders','Hematology Department',3,310.00),(48,'Nephrology','Kidney care and dialysis treatment','Nephrology Unit',3,340.00),(49,'Respiratory Therapy','Care for lung and respiratory conditions','Respiratory Therapy Unit',3,150.00),(50,'Diabetes Management','Comprehensive diabetes care and education','Diabetes Care Center',3,130.00);
/*!40000 ALTER TABLE `Services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Visitors`
--

DROP TABLE IF EXISTS `Visitors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Visitors` (
  `Vid` int NOT NULL,
  `Vname` varchar(255) DEFAULT NULL,
  `Sex` char(1) DEFAULT NULL,
  `Phone_No` varchar(15) DEFAULT NULL,
  `Pid` int DEFAULT NULL,
  PRIMARY KEY (`Vid`),
  KEY `Pid` (`Pid`),
  CONSTRAINT `visitors_ibfk_1` FOREIGN KEY (`Pid`) REFERENCES `Patients` (`Pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Visitors`
--

LOCK TABLES `Visitors` WRITE;
/*!40000 ALTER TABLE `Visitors` DISABLE KEYS */;
/*!40000 ALTER TABLE `Visitors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 23:00:26
