package com.example.spinnerproject;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Spinner;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    int result = 0;     // 누적되는 총 금액
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public int returnResult(int menu, int cnt) { // 총 금액을 return 해주는 함수
        int result = 0;

        if(menu == 1) {
            result = 4000*cnt;
        } else if(menu == 2) {
            result = 5000*cnt;
        } else if(menu == 3) {
            result = 5500*cnt;
        } else if(menu == 4) {
            result = 5000*cnt;
        } else if(menu == 5) {
            result = 8000*cnt;
        }
        return result;
    }

    public void btnClick(View view) {
        TextView textView = (TextView)findViewById(R.id.textView);
        Spinner spinnerMenu = (Spinner)findViewById(R.id.spinnerMenu);
        Spinner spinnerCount = (Spinner)findViewById(R.id.spinnerCount);

        int Menu = spinnerMenu.getSelectedItemPosition();     // Menu의 index값 가져오기
        int Count = Integer.parseInt(spinnerCount.getSelectedItem().toString());     // Count값 가져오기

        result += returnResult(Menu, Count);        // 결과값 누적
        String stResult = String.valueOf(result);
        textView.setText(stResult);
    }
}