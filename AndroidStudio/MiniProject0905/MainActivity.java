package com.example.spinnerprojectmain;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Spinner;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void mainBtnClick(View view) {           // 메인화면의 버튼 main->sub2
        Spinner spinnerMenu = (Spinner)findViewById(R.id.spinnerMenu);
        int Menu = spinnerMenu.getSelectedItemPosition();     // 값 가져오기 index값

        if(Menu == 1) { // 임의로 1만 코딩: 1은 아이스아메리카노 / 2는 카페라떼 / 3은 돌체라떼
            Intent intent = new Intent(getApplicationContext(),SubActivity.class);
            startActivity(intent);
        }
    }
}