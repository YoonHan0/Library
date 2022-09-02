package com.example.hanyoung05_2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void OnbtnClick(View view) {
        Intent intent = new Intent(getApplicationContext(),Act2.class);
        startActivity(intent);
    }
    public void deleteImg(View view) {
        View image = findViewById(R.id.imageView);

        image.setVisibility(View.INVISIBLE);    //INVISIBLE : 투명해지게하기, VISIBLE : 보이게하기

    }

    public void createImg(View view) {
        View image = findViewById(R.id.imageView);

        image.setVisibility(View.VISIBLE);    //INVISIBLE : 투명해지게하기, VISIBLE : 보이게하기

    }
}