package model

type User struct {
	IdUser   int    `gorm:"primaryKey;column:id_user;autoIncrement" json:"id_user"`
	Nama     string `gorm:"column:nama" json:"nama"`
	Npm      string `gorm:"column:npm" json:"npm"`
	Judul    string `gorm:"column:judul" json:"judul"`
	AsalKota string `gorm:"column:asal_kota" json:"asal_kota"`
}
