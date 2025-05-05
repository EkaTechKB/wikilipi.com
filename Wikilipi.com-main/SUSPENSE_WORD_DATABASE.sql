CREATE DATABASE  IF NOT EXISTS `SUSPENSE_WORD_DATABASE` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `SUSPENSE_WORD_DATABASE`;
-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: SUSPENSE_WORD_DATABASE
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

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
-- Table structure for table `EKA_MISSING_WORD_TABLE`
--

DROP TABLE IF EXISTS `EKA_MISSING_WORD_TABLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EKA_MISSING_WORD_TABLE` (
  `C_ENGLISH` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNT` int(100) NOT NULL DEFAULT '0',
  `C_EKALIPI` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNTRY` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'IN',
  `C_TIME` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_OTHER` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `srn` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`srn`),
  KEY `C_ENGLISH` (`C_ENGLISH`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EKA_MISSING_WORD_TABLE1`
--

DROP TABLE IF EXISTS `EKA_MISSING_WORD_TABLE1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EKA_MISSING_WORD_TABLE1` (
  `C_ENGLISH` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNT` int(100) NOT NULL DEFAULT '0',
  `C_EKALIPI` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNTRY` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'IN',
  `C_TIME` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_OTHER` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `srn` int(11) NOT NULL AUTO_INCREMENT,
  `UNIXTIME` date NOT NULL,
  PRIMARY KEY (`srn`),
  KEY `C_ENGLISH` (`C_ENGLISH`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EKA_WORD_TABLE`
--

DROP TABLE IF EXISTS `EKA_WORD_TABLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EKA_WORD_TABLE` (
  `C_ENGLISH` varchar(1000) COLLATE utf8mb4_bin NOT NULL,
  `C_COUNT` int(100) NOT NULL DEFAULT '0',
  `C_EKALIPI` varchar(1000) COLLATE utf8mb4_bin NOT NULL,
  `C_COUNTRY` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'IN',
  `C_OTHER` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_TIME` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `srn` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `foldername` varchar(15) COLLATE utf8mb4_bin DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb4_bin DEFAULT '',
  PRIMARY KEY (`srn`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EKA_WORD_TABLE_BKP`
--

DROP TABLE IF EXISTS `EKA_WORD_TABLE_BKP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EKA_WORD_TABLE_BKP` (
  `C_ENGLISH` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `C_COUNT` int(100) NOT NULL DEFAULT '0',
  `C_EKALIPI` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `C_COUNTRY` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'IN',
  `C_OTHER` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_TIME` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `srn` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`srn`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `SALUTATION_TABLE`
--

DROP TABLE IF EXISTS `SALUTATION_TABLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SALUTATION_TABLE` (
  `C_ENGLISH` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNT` int(100) NOT NULL DEFAULT '0',
  `C_EKALIPI` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_COUNTRY` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 'IN',
  `C_TIME` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `C_OTHER` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `srn` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`srn`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `TransactionDetails`
--

DROP TABLE IF EXISTS `TransactionDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TransactionDetails` (
  `TID` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `orderId` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `order_status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `mobile` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tdate` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `activationStatus` int(11) NOT NULL DEFAULT '0',
  `activationType` int(11) DEFAULT '0',
  `noOfTimesActivated` int(11) DEFAULT '0',
  `maxNumberOfTimesActivation` int(11) DEFAULT '50',
  `mobileDeviceId` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `registeruser`
--

DROP TABLE IF EXISTS `registeruser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registeruser` (
  `deviceId` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` text NOT NULL,
  `email` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mobile` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` text NOT NULL,
  PRIMARY KEY (`deviceId`(100))
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-26 21:37:34
