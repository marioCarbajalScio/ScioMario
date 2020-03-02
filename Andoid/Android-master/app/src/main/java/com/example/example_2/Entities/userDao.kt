package com.example.example_2.Entities
import androidx.room.*


@Dao
interface UserDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertUser(user: User)

    /*@Update
    fun updateGender(gender: User)

    @Delete
    fun deleteGender(gender: User)

    @Query("SELECT * FROM User WHERE name == :name")
    fun getGenderByName(name: String): List<User>*/

    @Query("SELECT * FROM User")
    fun getUsers(): List<User>
}