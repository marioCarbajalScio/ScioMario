package com.example.example_2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import com.example.example_2.Entities.RoomUserDatabase
import com.example.example_2.Entities.User
import com.example.example_2.Entities.UserDao
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_second.*

class SecondActivity : AppCompatActivity() {

    private var db: RoomUserDatabase? = null
    private var userDao: UserDao? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_second)

        val objetoIntent: Intent=intent
        var Nombre = objetoIntent.getStringExtra("Nombre")
        var Apellido = objetoIntent.getStringExtra("Apellido")
        textSaludo.text ="Hola $Nombre $Apellido"

        db = RoomUserDatabase.getAppDataBase(context = this)
        userDao = db?.RoomUserDao()

        var user1 = User(name=Nombre, lastName=Apellido)

        with(userDao){
            this?.insertUser(user1)
            val a= this?.getUsers()?.last()

            if (a != null) {
                textSaludo3.text ="Id Usuario : ${a.id} \n Nombre: ${a.name} \n" +
                        " Apellido: ${a.lastName}"
                textSaludo2.text ="Registro Exitoso!"
            }

        }
        back.setOnClickListener{

            var intent = Intent(this,MainActivity::class.java)
            startActivity(intent)

        }
    }


}
