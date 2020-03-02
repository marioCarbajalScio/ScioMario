package com.example.example_2.Entities

import androidx.room.*


@Entity
data class User(
    @PrimaryKey(autoGenerate = true)
    val id: Int? = null,
    val name: String,
    val lastName: String
)