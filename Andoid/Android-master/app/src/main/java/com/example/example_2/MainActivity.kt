package com.example.example_2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.content.Intent
import com.example.example_2.Entities.RoomUserDatabase
import com.example.example_2.Entities.UserDao
import com.example.example_2.Entities.User
import io.reactivex.Observable
import io.reactivex.schedulers.Schedulers
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {


    private var db: RoomUserDatabase? = null
    private var userDao: UserDao? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btnir.setOnClickListener{
            var Nombre:String = txtNombre.text.toString()
            var Apellido:String = txtApellido.text.toString()
            var intent = Intent(this,SecondActivity::class.java)
            intent.putExtra("Nombre", Nombre)
            intent.putExtra("Apellido", Apellido)
            startActivity(intent)

        }




    }
}
