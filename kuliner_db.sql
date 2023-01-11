-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jan 2023 pada 02.16
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kuliner_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `people` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`id`, `name`, `price`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'Beef Burger', 30000, '306264fee75b7c2ae5553da673d5fa14.png', 'http://localhost:5000/images/306264fee75b7c2ae5553da673d5fa14.png', '2023-01-06 01:33:03', '2023-01-06 01:33:03'),
(2, 'Chicken Nugget', 10000, '27966d68fc2772dc4ac643ecf788c580.png', 'http://localhost:5000/images/27966d68fc2772dc4ac643ecf788c580.png', '2023-01-06 01:50:33', '2023-01-06 01:50:33'),
(3, 'Double Chesee Burger', 34000, '299b743e689a9a1f286debcafe785f47.png', 'http://localhost:5000/images/299b743e689a9a1f286debcafe785f47.png', '2023-01-06 01:53:23', '2023-01-06 01:53:23'),
(4, 'Chicken Kebab', 25000, 'd7110866de009147850046dc60325974.png', 'http://localhost:5000/images/d7110866de009147850046dc60325974.png', '2023-01-06 01:54:15', '2023-01-06 01:54:15'),
(5, 'Panas 02', 40000, 'c97bcd32b976d174eac83d1877a3e2f3.png', 'http://localhost:5000/images/c97bcd32b976d174eac83d1877a3e2f3.png', '2023-01-06 01:54:50', '2023-01-06 01:54:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `restoran`
--

CREATE TABLE `restoran` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `jarak` float DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `restoran`
--

INSERT INTO `restoran` (`id`, `name`, `about`, `location`, `jarak`, `rate`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'McDonalds • Podomoro', 'American, Fast Food', 'Jl. Padomoro Boulevard, Buah Batu, Kabupaten Bandung, Jawa Barat', 0.4, 4.6, '63ce6700f7873ca880e326b8c5f68f4c.png', 'http://localhost:5000/images/63ce6700f7873ca880e326b8c5f68f4c.png', '2023-01-06 02:09:10', '2023-01-06 02:09:10'),
(2, 'Warteg Mulya Telkom University', 'Makan sini, bawa pulang?', 'Jl. Mangga 2 No.90 Telkom University, Sukapura, Dayeuhkolot, Bandung', 0.6, 4.7, 'bd2b9737d4a4405356d6dc4d626ab3c4.png', 'http://localhost:5000/images/bd2b9737d4a4405356d6dc4d626ab3c4.png', '2023-01-06 02:13:01', '2023-01-06 02:13:01'),
(3, 'Kopi Bawah Pohon', 'Cafe for healing', 'Jl. Pesona Bali Residence No.2, Buah Batu, Kabupaten Bandung, Jawa Barat', 1.2, 4.8, '0cd2d9f15bab1fa982ad4046437406a1.png', 'http://localhost:5000/images/0cd2d9f15bab1fa982ad4046437406a1.png', '2023-01-06 02:15:53', '2023-01-06 02:15:53'),
(4, 'Meatguy Steakhouse • Pesona Bali', 'Weastern Food', 'Jl. Pesona Bali Residence Blok E8 No.2 Kabupaten Bandung, Bandung, Jawa Barat', 1.5, 4.5, '4a7955586c4157b9a1e98e17a375235e.png', 'http://localhost:5000/images/4a7955586c4157b9a1e98e17a375235e.png', '2023-01-06 02:17:24', '2023-01-06 02:17:24'),
(5, 'Jardin Cafe • Martadinata', 'Itali, Barat, Asia', 'Jl. Cimanuk No. 1A, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat', 7.5, 4.9, '972be44435691fcacbd1b1b7d3e3be59.png', 'http://localhost:5000/images/972be44435691fcacbd1b1b7d3e3be59.png', '2023-01-06 02:19:42', '2023-01-06 02:19:42'),
(6, 'Above and Beyond', 'Barat', 'Jl. Pasirkaliki, Andir Pasirkaliki, Paskal Hyper Square, Bandung', 7.5, 5, 'c3e95583635b9a99ba383051c2997fd9.png', 'http://localhost:5000/images/c3e95583635b9a99ba383051c2997fd9.png', '2023-01-06 02:21:07', '2023-01-06 02:21:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `restoran`
--
ALTER TABLE `restoran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `restoran`
--
ALTER TABLE `restoran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
