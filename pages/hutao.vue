<template>
  <div class="wrap">
    <h1 class='title'>原神胡桃圣遗物词条收益计算</h1>

    <div v-for='item in equipArray' :key='item.key' class="item">
      <label :for="item.key">{{item.name}}</label>
      <el-input :id="item.key" v-model='item.value' :placeholder="item.placeholder" clearable type="number"  />
    </div>

    <div class="item">
      <label for="criticalHitRate" style='color: #2d8cf0'>暴击率</label>
      <el-input id="criticalHitRate" v-model='criticalHitRate' clearable type="number" placeholder="暴击率" @input='changeSubmit' />
    </div>

    <div v-if='result > 0 || (criticalHitRate > 0 && isSubmit)' class='result-wrap'>
      <div>
        <div :style='{color: estimateText.color}'>
          <strong>
            增伤值: {{result}}&nbsp;
            评分: {{estimateText.level}}级
            <i v-for='star in estimateText.star' :key='star' style='color: #ff9900;' class='el-icon-star-on'></i>
          </strong>
          <p v-if='result > 9' style='color: red;'>{{errorText}}</p>
          <p v-else>{{estimateText.text}}</p>
        </div>
      </div>
    </div>

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

    <div class='margin12'>
      <div class='sub-title'><i class='el-icon-info'></i> 使用前建议先阅读以下内容：</div>
      <div class='temp-wrap'>
        <div class='temp-img'>
          <img src='https://cdn.boblog.com/571677159247_.pic.jpg' alt='原神胡桃圣遗物示例图' />
        </div>
        <div class='temp-text'>
          <div>温馨提示：是把单个圣遗物的<strong style='color: red;'>[副词条]</strong>对应填上去即可</div>
          <div class="sub-title">精通沙（生命沙、爆伤头）：</div>
          <div>0暴击率，最高增伤点为7.83，</div>
          <div>2.7—3.9暴击率，增伤点≥6.5；</div>
          <div>5.4—7.8暴击率，增伤点≥5.5；</div>
          <div>8.2—11.7暴击率，增伤点≥4.5；</div>
          <div>11.7—15.6暴击率，增伤点≥3.5；</div>
          <div>15.6—19.5暴击率，增伤点≥2.5；</div>
          <div>19.5—23.3暴击率，增伤点≥1.5。</div>
        </div>
      </div>
    </div>

    <div class='margin12'>
      <div class='sub-title'>
        以下是一精专武标准，决斗枪减2万伤害，匣里减1万伤害，满命满精加2万伤害
      </div>
      <strong>暴击头：</strong>
      <p>平均增伤值＞4，裸蒸发6万多</p>
      <p>平均增伤值＞5，裸蒸发7万多</p>
      <p>平均增伤值＞6，裸蒸发8万多</p>

      <strong>爆伤头（精通/生命百分比）：</strong>
      <p>平均增伤值＞2.4，裸蒸发6万多</p>
      <p>平均增伤值＞3.4，裸蒸发7万多</p>
      <p>平均增伤值＞4.4，裸蒸发8万多</p>
    </div>

    <div class='margin12'>
      <strong class='sub-title'>小程序版本上线啦，保存二维码扫描或者微信小程序搜索【老婆养成小助手】即可使用~</strong>
      <div>
        <img class='wxapp-image' src='https://cdn.boblog.com/gh_a6861ef047ae_430.jpg' alt='老婆养成小助手' />
      </div>
      <div>
        <img class='wxapp-image' src='https://cdn.boblog.com/WechatIMG35.jpeg' alt='抖音殇离' />
      </div>
    </div>

    <div class='margin12 author-wrap'>
      <h2 class='author'>作者：@Bobby Liang</h2>，参考数据来自于抖音：@殇离 UP主，抖音号：DouYin_Sunle，玩胡桃看他视频就够了~
    </div>
  </div>
</template>
<script>
import {ATTRIBUTES_MAP as attributesMap, equipArray, LEVEL_TEXT as levelText} from '../lib/hutao'

export default {
  layout: 'hutao',
  data() {
    return {
      equipArray,
      criticalHitRate: 0,
      isSubmit: false,
      result: 0,
      estimateText: {},
      errorText: '你的输入的数据有误，这个只是用来分辨单个圣遗物好坏的，请重新输入。'
    }
  },
  head() {
    return {
      title: '原神胡桃圣遗物词条收益计算',
      meta: [
        { name: 'keywords', content: '原神，胡桃，圣遗物，魔女套，绝缘套，追忆套，圣遗物增伤计算' },
        { name: 'description', content: '原神胡桃圣遗物增伤值计算算法' },
      ],
    }
  },
  methods: {
    submit() {
      const result = this.equipArray.reduce((prev, next) => {
        const {key, value, isUndivided = false} = next
        if(value) {
          if(isUndivided) {
            return  prev + ( value / attributesMap[key] / 2)
          }
          return  prev + (value / attributesMap[key])
        }
        return prev
      }, 0).toFixed(2)

      this.result = result
      this.handleEstimate(result)
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
    handleEstimate(result) {
      // 暴击率=0
      if(this.criticalHitRate <= 0) {
        this.handleCriticalHitRate(7.5)
      }

      // 3.9≥暴击率≥2.7：
      if(this.criticalHitRate >= 2.7 && this.criticalHitRate <= 3.9) {
        this.handleCriticalHitRate(7)
      }

      // 7.8≥暴击率≥5.4：
      if(this.criticalHitRate >= 5.4 && this.criticalHitRate <= 7.8) {
        this.handleCriticalHitRate(6)
      }

      // 11.7≥暴击率≥8.2：
      if(this.criticalHitRate >= 8.2 && this.criticalHitRate <= 11.7) {
        this.handleCriticalHitRate(5)

      }

      // 15.6≥暴击率＞11.7：
      if(this.criticalHitRate >= 11.7 && this.criticalHitRate <= 15.6) {
        this.handleCriticalHitRate(4)
      }

      // 19.7≥暴击率＞15.6：
      if(this.criticalHitRate > 15.6 && this.criticalHitRate <= 19.5) {
        this.handleCriticalHitRate(3)
      }

      // 23≥暴击率＞19.7：
      if(this.criticalHitRate > 19.5 && this.criticalHitRate <= 23.3) {
        this.handleCriticalHitRate(2)
      }
    },
    handleCriticalHitRate(value) {
      this.isSubmit = true
      const result = this.result
      if(result >= value) {
        levelText.SSS.text = `胡桃厨天花板级圣遗物，又称遗物级圣遗物，恭喜你，你的有效词条数已经接近满值，增伤点数极限为 ${ value + 1}。`
        this.estimateText = levelText.SSS
      }

      if(result >= value - 1 && result < value) {
        levelText.SS.text = `极品圣遗物，欧皇专属，很给力的圣遗物，${value - 1} 的增伤值达标，下一阶段需要 ${value} 的增伤值。`
        this.estimateText = levelText.SS
      }

      if(result >= value - 2 && result < value - 1) {
        levelText.S.text = `毕业圣遗物，如果你不是胡桃厨可以休息啦！${value - 2} 的增伤值达标，下一阶段需要 ${value -1} 的增伤值。`
        this.estimateText = levelText.S
      }

      if(result < value - 2 || result === 0) {
        levelText.C.text = `赶快为你的老婆多刷点圣遗物吧，都快穷的吃土了，下一阶段需要 ${value - 2} 的增伤值。`
        this.estimateText = levelText.C
      }
    },
    changeSubmit() {
      this.isSubmit = false
    },
    reset() {
      this.result = 0
      this.criticalHitRate = 0
      this.isSubmit = false
      this.estimateText = {}
      this.equipArray.forEach(item => item.value = '')
      this.$message({
        message: '重置成功！',
        type: 'success'
      });
    }
  }
}

</script>
<style scoped>
.wrap {
  width: 50%;
  margin: 0 auto;
}
.title {
  font-size: 30px;
  text-align: center;
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

.sub-title {
  font-size: 16px;
  font-weight: bold;
  margin: 18px 0;
}
.temp-wrap {
  display: flex;
  width: 100%;
}

.temp-img {
  flex: 6;
}
.wxapp-image {
  width: 42%;
  margin: 12px 0;
}
.temp-text {
  flex: 4;
  line-height: 2;
  margin-left: 24px;
}


img {
  width: 100%;
}
.author-wrap {
  font-size: 14px;
}
.author {
  display: inline-block;
  line-height: 1;
  font-size: 14px;
}

@media screen and (max-width: 540px) {
  .wrap {
    width: 90%;
    margin: 0 auto;
  }


  .temp-wrap {
    flex-direction: column;
  }
  .wxapp-image {
    width: 100%;
  }
  .temp-img {
    flex: 1;
  }
  .temp-text {
    flex: 1;
    margin-left: 0;
  }
  .title {
    font-size: 24px;
  }

}
.margin12 {
  margin: 12px 0;
}

</style>
