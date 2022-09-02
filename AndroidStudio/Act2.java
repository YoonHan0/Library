package com.example.hanyoung05_2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class Act2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_act2);
    }

    public void onClickReturn(View view){
        Intent intent = new Intent(getApplicationContext(),MainActivity.class);
        startActivity(intent);
    }
}