package com.example.example_2.Entities
import android.content.Context
import androidx.room.*

@Database(
    entities = [User::class],
    version = 3,
    exportSchema = false
)
abstract class RoomUserDatabase : RoomDatabase() {

    abstract fun RoomUserDao(): UserDao

    companion object {

        var INSTANCE: RoomUserDatabase? = null

        fun getAppDataBase(context: Context): RoomUserDatabase? {
            if (INSTANCE == null){
                synchronized(RoomUserDatabase::class){
                    INSTANCE = Room.databaseBuilder(context.applicationContext, RoomUserDatabase::class.java, "myDB1").allowMainThreadQueries().build()
                }
            }
            return INSTANCE
        }

        fun destroyDataBase(){
            INSTANCE = null
        }
    }
}