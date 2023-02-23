<template>
  <div class="wrap">
    <h2 style="text-align: center;">胡桃魔女套圣遗物参考计算方式</h2>

    <div class="item">
      <label for="JingTong">精通：</label>
      <el-input id="JingTong" v-model='JingTong'  clearable type="number" placeholder="精通" />
    </div>

    <div class="item">
      <label for="BaoShang">爆伤：</label>
      <el-input id="BaoShang" v-model='BaoShang' clearable type="number" placeholder="爆伤" />
    </div>

    <div class="item">
      <label for="shengMingBaiFenBi">大生命：</label>
      <el-input id="shengMingBaiFenBi" v-model='shengMingBaiFenBi' clearable type="number" placeholder="生命百分比" />
    </div>

    <div class="item">
      <label for="XiaoShengMing">小生命：</label>
      <el-input id="XiaoShengMing" v-model='XiaoShengMing' clearable type="number" placeholder="小生命" />
    </div>


    <div class="item">
      <label for="GongJiBaiFenBi">大攻击：</label>
      <el-input id="GongJiBaiFenBi" v-model='GongJiBaiFenBi' clearable type="number" placeholder="攻击百分比" />
    </div>
    <div class="item">
      <label for="xiaoGongJi">小攻击</label>
      <el-input id="xiaoGongJi" v-model='xiaoGongJi' clearable type="number" placeholder="小攻击" />
    </div>
    <div v-show='result' class='result-wrap'>结果：<strong id="result-text" style='color: #2d8cf0'>{{result}}</strong></div>

    <div style='margin-bottom: 12px;'>
      <el-button type="primary" style='width: 100%;' @click.native='submit'>
        立即计算
      </el-button>
    </div>

    <div>
      <el-button style='width: 100%;' @click.native='reset'>
        重置数据
      </el-button>
    </div>

    <div style='margin-top: 12px;'>
      参考数据来自于抖音：@殇离 UP主，抖音号：DouYin_Sunle，玩胡桃看他视频就够了~
    </div>

    <p>温馨提示：把单个圣遗物的副词条对应填上去即可</p>
    <div class='temp-img'>
      <img src='https://cdn.boblog.com/571677159247_.pic.jpg' alt='temp'>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'hutao',
  data() {
    return {
      JingTong: '',
      BaoShang: '',
      shengMingBaiFenBi: '',
      XiaoShengMing: '',
      GongJiBaiFenBi: '',
      xiaoGongJi: '',
      result: 0
    }
  },
  head() {
    return {
      title: '原神胡桃魔女圣遗物参考',
    }
  },
  methods: {
    submit() {
      // 精通
      const JingTong = 23
      // 生命百分比
      const shengMingBaiFenBi = 5.8
      // 小生命
      const XiaoShengMing = 906
      // 爆伤
      const BaoShang = 7.8
      // 攻击百分比
      const GongJiBaiFenBi = 5.8
      // 小攻击
      const xiaoGongJi =  41

      let result = 0;
      if (this.JingTong) {
        result += this.JingTong / JingTong
      }
      if (this.shengMingBaiFenBi) {
        result += this.shengMingBaiFenBi / shengMingBaiFenBi
      }
      if (this.XiaoShengMing) {
        result += this.XiaoShengMing / XiaoShengMing
      }
      if (this.BaoShang) {
        result += this.BaoShang / BaoShang
      }
      if (this.GongJiBaiFenBi) {
        result += this.GongJiBaiFenBi / GongJiBaiFenBi  / 2
      }
      if (this.xiaoGongJi) {
        result += this.xiaoGongJi / xiaoGongJi / 2
      }

      this.result = result

      if(result) {
        this.$message({
          message: '计算成功！',
          type: 'success'
        });
      } else {
        this.$message({
          message: '请输入正确的数值！',
          type: 'warning'
        });
      }

    },
    reset() {
      this.JingTong= ''
      this.BaoShang= ''
      this.shengMingBaiFenBi= ''
      this.XiaoShengMing= ''
      this.GongJiBaiFenBi= ''
      this.xiaoGongJi=''
      this.result=0
      this.$message({
        message: '重置成功！',
        type: 'success'
      });
    },
  }
}

</script>
<style scoped>
.wrap {
  width: 50%;
  margin: 0 auto;
}
.item {
  display: flex;
  margin: 24px 0;
}

.item label {
  width: 88px;
  display: block;
  height: 32px;
  line-height: 32px;
}

.result-wrap {
  margin: 24px auto;
  font-size: 18px;
  text-align: center;
}

.temp-img {
  width: 42%;
  margin: 24px 0;
}

img {
  width: 100%;
}

@media screen and (max-width: 540px) {
  .wrap {
    width: 90%;
    margin: 0 auto;
  }

  .temp-img {
    width: 100%;
  }
}

</style>
